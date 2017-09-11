import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './notice.less'
export default class CommonNotice extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { mark, title,id } = this.props
    return (
      <figure className={`notice-container ${mark === 1 ? 'imp' : ''}`}>
        {mark === 1 ? <div className="notice-mark">重要通知</div> : null}
        <Link to={`/auction/broadcast/notice/${id}`} className="notice-title">
          <figcaption>{title}</figcaption>
        </Link>
      </figure>
    )
  }
}

CommonNotice.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  mark: PropTypes.number,
}