import React from 'react'
import PropTypes from 'prop-types'
class Bundle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }
  }

  async componentWillMount() {
    this.asyncLoad()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  asyncLoad(){
    const {load} = this.props
    const mod = load()
    this.setState({
      mode:mod.default
    })
  }

  render() {
    const {mod} = this.state
    return this.props.children(mod)
  }
}

Bundle.propTypes = {
  load:PropTypes.any,
  children:PropTypes.any,
}

export default Bundle