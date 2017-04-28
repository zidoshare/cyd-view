import React from 'react'
import { Spin, Card, Layout, Pagination,Affix} from 'antd'
import QueueAnim from 'rc-queue-anim'
import {Link} from 'react-router'
import enquire from 'enquire.js'
const Content = Layout.Content
import './News.scss'
export default class News extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      response: null,
      loading: true,
      middle:true,
    }
  }
  //响应式布局
  componentWillMount(){
    this.enquireScreen((isMiddle)=>{
      this.setState({middle:isMiddle})
    })
  }

  enquireScreen(cb){
    enquire.register('only screen and (min-width: 1320px)', {
      match: () => {
        cb(true)
      },
      unmtach:()=>{
        cb(false)
      }
    })
    enquire.register('only screen and (min-width: 880px) and (max-width:1319px)', {
      match: () => {
        cb(false)
      },
      unmtach:()=>{
        cb(true)
      }
    })
  }

  componentDidMount() {
    fetch( '/api/pub/news/index', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    } ).then( response => response.json() ).then( data => this.setState( {
      response: data,
      loading: false,
    } ) )
  }
  
  onPageChange(pageNum){
    this.setState({
      response:null,
      loading:true
    })
    fetch('/api/pub/news/index?p='+pageNum, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({
      response: data,
      loading: false,
    } ) )
  }
  render() {

    const list = []
    const {response} = this.state
    console.log(this.state)
    /*if(this.state.middle)
      list.push(<div className="clear-fix">
                        <div className="pull-right">
                          <p>用微信客户端扫一扫,</p>
                          <p>了解更多关于钱币的知识</p>
                        </div>
                        <div className="wx-min pull-right"/>
                        </div>)*/
    if ( response != null ) {
      const {content} = response.data
      for (let i = 0;i < content.length;i++) {
        let element = content[ i ]
        let card = <Card style={{ width: 400}} bodyStyle={{ padding: 0 }} bordered={false}>
                     <div className="custom-image">
                       <img alt="example" width="100%" src={element.imageUrl}/>
                     </div>
                     <div className="custom-card">
                       <h3>{element.title}</h3>
                       <nobr>
                         {element.description}
                       </nobr>
                     </div>
                   </Card>
        
        let dom = (<div  className = "custom"  key = {'card' + i}>
            {element.linkUrl == null ? 
            <Link to={'/news/'+element.id}>{card}</Link> :
            <a target="_blank" href={element.linkUrl} style={{display:'block'}}>{card}</a>}</div>)
        list.push(dom)
      }
    }
    return (
    <Content style={{ padding: '10px' }}>
      <Spin spinning={this.state.loading}>
        <div style={{minHeight:600}}>
          
            {list.length > 0 ? <div style={{width:this.state.middle?1320:1020,margin:'auto'}}>
              {this.state.middle?<QueueAnim className={'custom-container clear-fix'}>{list}</QueueAnim>:
                <div className="clear-fix">
                  <QueueAnim className="custom-container-info">
                    {list}
                    <div style={{clear:'both'}}></div>
                  </QueueAnim>
                    <Affix className="pull-left">
                      <div>
                        <p>用微信客户端扫一扫</p>
                        <p>了解更多关于钱币的知识</p>
                        <div className="wx"/>
                        </div>
                    </Affix>
                </div>
              }  
            </div> : null}
          
        </div>
        {response != null?<Pagination showQuickJumper defaultCurrent={response.data.number+1} total={response.data.totalElements} onChange={this.onPageChange.bind(this)} />:null}
      </Spin>
    </Content>
    )
  }
}

News.propTypes = {
  id: React.PropTypes.string,
}

News.defaultProps = {
  className: 'content7',
}
