import React from 'react'
import {Spin,Layout} from 'antd'
const Content = Layout.Content
export default class Article extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      article: null,
      loading:true
    }
  }
  componentDidMount() {
    if ( this.props.params.id == null ) {
      return
    }
    fetch( '/api/pub/news/info?id=' + this.props.params.id, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    } ).then( response => response.json() ).then( data => this.setState( {
      response: data,
      loading: false,
    } ) )
  }
  render() {
    return (
    <Content style={{ padding: '10px' }}>
      <Spin delay={500} spinning={this.state.loading}>
        <div style={{minHeight:500}}>
          hello world
        </div>
      </Spin>
    </Content>
    )
  }
}
