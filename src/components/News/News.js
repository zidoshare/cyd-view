import React from 'react'
import { Spin, Card, Layout, Pagination} from 'antd'
import QueueAnim from 'rc-queue-anim'
import {Link} from 'react-router'
const Content = Layout.Content
import './News.scss'
export default class News extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      response: null,
      loading: true,
    }
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
    if ( response != null ) {
      const {content} = response.data
      for (let i = 0;i < content.length;i++) {
        let element = content[ i ]
        console.log(element)
        let dom = (<div  className = "custom"  key = {'card' + i}>
          <Link to={'/news/'+element.id}><Card style={{ width: 400}} bodyStyle={{ padding: 0 }} bordered={false}>
                     <div className="custom-image">
                       <img alt="example" width="100%" src={element.imageUrl}/>
                     </div>
                     <div className="custom-card">
                       <h3>{element.title}</h3>
                       <nobr>
                         {element.description}
                       </nobr>
                     </div>
                   </Card></Link>
        </div>)
        list.push(dom)
      }
    }
    return (
    <Content style={{ padding: '10px' }}>
      <Spin spinning={this.state.loading}>
        <div style={{minHeight:600}}>
          
            {list.length > 0 ? <QueueAnim>{list}</QueueAnim> : null}
            <div style={{clear:'both'}}></div>
          
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
