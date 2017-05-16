import React from 'react'
import {Spin,Layout} from 'antd'
import {Link} from 'react-router'
import Title from 'Components/Title'
import QueueAnim from 'rc-queue-anim'
import './Article.scss'
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
    if ( this.props.params.id === null ) {
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
    const response = this.state.response
    return (
    <Content style={{ padding: '10px 200px',background:'white' }}>
      <div className="tools"><Link to="/news">&lt;&lt;返回上一级</Link></div>
      <Spin spinning={this.state.loading}>
        {response != null?<QueueAnim type="bottom" style={{background:'white'}}>
          {[
            <Title text={response.data.title} key={'title'}/>,
            <div style={{minHeight:500,padding:'20px 60px'}} key={'content'} className="ct">
              <div dangerouslySetInnerHTML={{__html:response.data.content}}/>
            </div>
          ]}
          </QueueAnim>:null}
      </Spin>
    </Content>
    )
  }
}

Article.propTypes = {
  params:React.PropTypes.object.isRequired
}