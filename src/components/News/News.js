import React from 'react'
import { Spin, Card, Layout } from 'antd'
import Title from 'Components/Title'
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

  getChildren(item,i){
    return (<li key={i} id={`${this.props.id}-block${i}`}>
        <div className="icon">
          <img src={item.icon} width="100%" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </li>)
  }
  render() {

    const list = []
    var child = []
    const {response} = this.state
    if ( response != null ) {
      const {content} = response.data
      console.log( content )
      for (let i = 0;i < content.length;i++) {
        if ( i % 2 == 0 ) {
          if ( i != 0 )
            list.push( child )
          child = []
        }
        var element = content[ i ]
        let dom = (<Card style={{ width: 400, }} className="table-th" bodyStyle={{ padding: 0 }} key={'card' + i}>
                     <div className="custom-image">
                       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                     </div>
                     <div className="custom-card">
                       <h3>Europe Street beat</h3>
                       <p>
                         www.instagram.com
                       </p>
                     </div>
                   </Card>)
        child.push( dom )
      }
    }
    console.log( list, list.length )
    return (
    <Content style={{ padding: '10px 200px' }}>
      <Title text="新闻动态"/>
      <Spin delay={500} spinning={this.state.loading}>
        <div className="table">
          {list.length > 0 ? list.map( ( row, index ) => (
             <div className="table-tr" key={'th' + index}>
               {row.map( value => value )}
             </div>
           ) ) : (<div className=""></div>)}
        </div>
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
