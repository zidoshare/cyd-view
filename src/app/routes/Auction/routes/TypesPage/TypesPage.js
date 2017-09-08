import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import './types.less'
import { NavLink } from 'react-router-dom'
import { get, isEmpty } from '../../../../Util'
import Preview from './components/Preview'

const tempItem = {
  head: 'http://odp22tnw6.bkt.clouddn.com/v1/',
  url: 'commodity/loading.jpg',
  name: '加载中...',
  endTime: '加载中...',
  currentPrice: '加载中...',
  focus: '加载中...',
}

const tempDataSource = {
  records: [tempItem, tempItem, tempItem, tempItem, tempItem, tempItem]
}
export class TypesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roots: [],
      types: [],
      currentType: {},
      childLoading: false,
      rootLoading: false,
      items: null,
      itemLoading: false,
      currentPage: 1,
      pageLevel: 0,
      key: null,
    }
  }
  componentWillMount() {
    this.setState({
      rootLoading: true,
      childLoading: true,
      itemLoading: true,
    })
    this.getSyncPath().then(json => Object.assign({}, {
      roots: json.data,
      rootLoading: false,
    })).then(result => {
      let rootId = this.props.match.params.root
      if (rootId == null)
        rootId = result.roots[0].id
      this.getSyncChildPath(rootId).then(json => Object.assign(result, {
        types: json.data,
        childLoading: false,
      })).then(result => {
        let { type } = this.props.match.params
        if (type == null)
          type = this.props.match.params.root
        if(type == null && isEmpty(result.types))
          return this.setState(Object.assign(result, {
            items:{records:[]},
            itemLoading: false,
          }))
        if (type == null)
          type = result.roots[0].id
        this.getSyncCommodities(type).then(json => {
          const currentState = Object.assign(result, {
            items: json.data,
            itemLoading: false,
          })
          this.setState(currentState)
        })
      })
    })

  }



  getSyncPath() {
    return get('/api/v1/types')
  }

  handleChildPathAndCommodities(rootId) {
    this.setState({
      childLoading: true,
      itemLoading: true,
    })
    this.getSyncChildPath(rootId).then(json => Object.assign({}, {
      types: json.data,
      childLoading: false,
    })).then(result => {
      if(isEmpty(result.types))
        return this.setState(Object.assign(result, {
          items:{records:[]},
          itemLoading: false,
        }))
      let type = result.types[0].id
      this.getSyncCommodities(type).then(json => {
        const currentState = Object.assign(result, {
          items: json.data,
          itemLoading: false,
        })
        this.setState(currentState)
      })
    })
  }

  setChildPathState(rootId) {
    this.setState({
      childLoading: true,
    })
    this.getSyncChildPath(rootId).then(json => this.setState({
      types: json.data,
      childLoading: false,
    }))
  }

  getSyncChildPath(rootId) {
    return get('/api/v1/types', { parent: rootId })
  }

  setCommoditiesState(type, currentPage = 1, pageLevel = 0, key) {
    this.setState({
      itemLoading: true,
    })
    this.getSyncCommodities(type, currentPage, pageLevel, key).then(json => {
      this.setState({
        items: json.data,
        itemLoading: false,
      })
    })
  }
  getSyncCommodities(type, currentPage = 1, pageLevel = 0, key) {
    return get('/api/v1/commodities/pages', {
      currentPage,
      pageLevel,
      type,
      key,
    })
  }
  render() {
    // const {match} = this.props
    const { roots, types, itemLoading } = this.state
    let { items } = this.state
    if (items == null)
      items = tempDataSource
    const { match } = this.props
    const { root,type } = match.params
    let currentType = {}
    if (!isEmpty(roots)) {
      if (root == null)
        currentType = roots[0]
      else
        [currentType] = (roots.filter(value => value.id == root))
    }
    return (
      <div className="types-wrapper">
        <div className="banner-left-types">
          <h1>拍品分类</h1>
          <Spin spinning={this.state.rootLoading}>
            <ul>
              {roots.map((value, index) => 
              <li key={`types-${index}`}>
                {(index==0 && root == null)?
                <NavLink className="active" onClick={()=>this.handleChildPathAndCommodities(value.id)} to={`/auction/types/${value.id}`}>{`${value.name}`}
                  </NavLink>:
                  <NavLink onClick={()=>this.handleChildPathAndCommodities(value.id)} to={`/auction/types/${value.id}`}>{`${value.name}`}
                  </NavLink>}
              </li>)}
            </ul>
          </Spin>
        </div>
        <div className="right-content">
          <Spin spinning={this.state.childLoading}>
            <div className="child-type-menu">
              <div className="child-menu-item">
                <span style={{ color: 'red' }}>{currentType.name}</span>
                <div className="ant-divider" />
                <span>筛选条件</span>
              </div>
              <div className="child-menu-item">
                <span>类别：</span>
                <div className="menu-item-span">
                  {type == null?
                  <NavLink exact className="active" onClick={()=>this.setCommoditiesState(currentType.id)} to={`/auction/types/${currentType.id}`}>全部</NavLink>
                  :<NavLink exact onClick={()=>this.setCommoditiesState(currentType.id)} to={`/auction/types/${currentType.id}`}>全部</NavLink>}
                  {types.map((value, index) => {
                    return <span key={'t-' + index}>
                      <div className="ant-divider" />
                      <NavLink onClick={()=>this.setCommoditiesState(value.id)} to={`/auction/types/${currentType.id}/${value.id}`}>
                        {value.name}
                      </NavLink>
                    </span>
                  })}
                </div>
              </div>
              <div className="child-menu-item" />
            </div>
          </Spin>
          <Spin spinning={itemLoading}>
            <div className="v-commodity-list">
              {items.records.map((value, index) => {
                return <Preview key={`item-${index}`} dataSource={value} />
              })}
            </div>
          </Spin>
          
        </div>
      </div>
    )
  }
}

TypesPage.propTypes = {
  location: PropTypes.string,
  match: PropTypes.object,
  changeMap: PropTypes.func.isRequired,
}

export default TypesPage