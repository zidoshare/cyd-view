import React from 'react'
import Commodity from 'Components/Commodity'
import { Spin,  Layout, Pagination} from 'antd'
import QueueAnim from 'rc-queue-anim'
const Content = Layout.Content

export default class Commodities extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      response: null,
      loading: true,
    }
  }
  componentDidMount() {
    fetch( '/api/pub/commodity/index', {
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
    fetch('/api/pub/commodity/index?p='+pageNum, {
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
      console.log(content)
      for (let i = 0;i < content.length;i++) {
        let element = content[ i ]
        let dom = (<div  className = "custom"  key = {'card' + i}>
          <Commodity title={element.title} image={element.image} description={element.description} images={element.images}/>
        </div>)
        list.push(dom)
      }
    }
    return (
    <Content style={{ padding: '10px' }}>
      <Spin delay={500} spinning={this.state.loading}>
        <div style={{minHeight:600}}>
          
            {list.length > 0 ? <QueueAnim delay={500}>{list}</QueueAnim> : null}
            <div style={{clear:'both'}}></div>
          
        </div>
        {response != null?<Pagination showQuickJumper defaultCurrent={response.data.number+1} total={response.data.totalElements} onChange={this.onPageChange.bind(this)} />:null}
      </Spin>
    </Content>
    )
  }
}
