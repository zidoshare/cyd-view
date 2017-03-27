import React from 'react'
import {Card} from 'antd'
export default class Commodity extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {title,image,description} = this.props
    return (
      <div>
        <Card style={{ width: 400}} bodyStyle={{ padding: 0 }} bordered={false}>
                     <div className="custom-image">
                       <img alt="example" width="100%" src={/*element.imageUrl*/ 'https://zos.alipayobjects.com/rmsportal/eXjuyOxVeNuttdH.jpg@450w'}/>
                     </div>
                     <div className="custom-card">
                       <h3>{title}</h3>
                       <p>
                         {description}
                       </p>
                     </div>
                   </Card>
      </div>
    )
  }
}

Commodity.propTypes = {
  title:React.PropTypes.string.isRequired,
  image:React.PropTypes.string,
  description:React.PropTypes.string.isRequired,
  images:React.PropTypes.array
}