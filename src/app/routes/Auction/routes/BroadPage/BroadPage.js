import React from 'react'
import Notice from './components/Notice'
import {get} from '../../../../Util'
import {Spin} from 'antd'
export default class BroadPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page:{
        records:[{
          title:'加载中'
        }]
      },
      pageLoading:false,
    }
  }
  componentWillMount(){
    this.setState({
      pageLoading:true,
    })
    get('/api/v1/notices').then(json => this.setState({
      page:json.data,
      pageLoading:false,
    }))
  }
  render(){
    const {page} = this.state
    return (
      <Spin spinning={this.state.pageLoading}>
        {page != null?page.records.map((value,index) => <Notice key={`notice-${index}`} {...value}/>):null}
      </Spin>
    )
  }
}