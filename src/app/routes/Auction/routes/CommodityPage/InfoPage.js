import React from 'react'
import PropTypes from 'prop-types'
import {get} from '../../../../Util'
export default class InfoPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:'<p/>',
    }
  }
  componentWillMount(){
    this.getDetail(this.props.col)
  }
  getDetail(col){
    let cols = ['info','detail','notice','ownerInfo']
    let param = cols.indexOf(col)
    if(param == -1)
      param = 0
    get(`/api/v1/commodity/info/${param}`,{
      id:this.props.id,
    }).then(json => this.setState({
      data:json.data,
    }),(err) => {
      this.setState({
        data:err.message,
      })
    })
  }
  render(){
    return (
      <div dangerouslySetInnerHTML={{
        __html:this.state.data
      }}/>
    )
  }
}

InfoPage.defaultProps = {
  col:'info'
}

InfoPage.propTypes = {
  match:PropTypes.object,
  col:PropTypes.string,
  id:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
}