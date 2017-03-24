import React from 'react'
import { Spin, Card, Layout} from 'antd'
import QueueAnim from 'rc-queue-anim'
import {Link} from 'react-router'
import { Lifecycle } from 'react-router'
const Content = Layout.Content
import './News.scss'
export default class News extends React.Component {
  static mixins=[Lifecycle]
  constructor( props ) {
    super( props )
    this.state = {
      response: null,
      loading: true,
    }
  }
  componentDidMount() {
    fetch( '/api/pub/news/index?p=1', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    } ).then( response => response.json() ).then( data => this.setState( {
      response: data,
      loading: false,
    } ) )
  }
  routerWillLeave(nextLocation){
    console.log('leave')
    this.setState({
      response:null,
      loading:false
    })
  }
  render() {

    const list = []
    const {response} = this.state
    if ( response != null ) {
      const {content} = response.data
      console.log(content)
      for (let i = 0;i < content.length;i++) {
        // var element = content[ i ]
        var dom = (<div  className = "custom"  key = {'card' + i}>
          <Card style={{ width: 400}} bodyStyle={{ padding: 0 }} bordered={false}>
                     <div className="custom-image">
                       <img alt="example" width="100%" src="https://zos.alipayobjects.com/rmsportal/eXjuyOxVeNuttdH.jpg@450w"/>
                     </div>
                     <div className="custom-card">
                       <h3><Link to="/news/1">Europe Street beat</Link></h3>
                       <p>
                         www.instagram.com
                       </p>
                     </div>
                   </Card>
        </div>)
        list.push(dom)
      }
    }
    
    return (
    <Content style={{ padding: '10px' }}>
      <Spin delay={500} spinning={this.state.loading}>
        <div style={{minHeight:600}}>
          <QueueAnim type={['left','right']} delay={500}>
            {list.length > 0 ? list : (<div className=""></div>)}
            <div style={{clear:'both'}}></div>
            </QueueAnim>
        </div>
        <div style={{textAlign:'center'}}>加载更多</div>
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
