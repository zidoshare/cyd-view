import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import './types.less'
import { NavLink } from 'react-router-dom'
import { get, isEmpty } from '../../../../Util'
export class TypesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roots: [],
      types: [],
      currentType: {},
      childLoading: true,
      rootLoading: true,
    }
  }
  componentDidMount() {
    this.getPath()
  }

  getPath() {
    const { match } = this.props
    const { root } = match.params
    let rootId = root
    this.setState({
      rootLoading: true,
    })
    get('/api/v1/types').then(json => this.setState({
      roots: json.data,
      rootLoading: false,
    }, this.getChildPath.bind(this, rootId)))
  }

  getChildPath(rootId) {
    if (rootId == null)
      rootId = this.state.roots[0].id
    this.setState({
      childLoading: true,
    })
    get('/api/v1/types', { parent: rootId }).then(json => {
      this.setState({
        types: json.data,
        childLoading: false,
      })
    })
  }

  render() {
    // const {match} = this.props
    const { roots, types } = this.state
    const { match } = this.props
    const { root } = match.params
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
              {roots.map((value, index) => <li key={`types-${index}`}><NavLink onClick={this.getChildPath.bind(this, value.id)} to={`/auction/types/${value.id}`}>{`${value.name}`}</NavLink></li>)}
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
                  {types.map((value, index) => {
                    return <span key={'t-' + index}>{index == 0 ? null : <div className="ant-divider" />}{value.name}</span>
                  })}
                </div>
              </div>
              <div className="child-menu-item" />
            </div>
          </Spin>
          <div className="v-commodity-list">
              
          </div>
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