import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './notice.less'
export default class CommonNotice extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { mark, title, id, imgHead, imgUrl } = this.props
    let resultUrl = imgHead == null ? null : (imgHead + imgUrl)
    return (
      <Link to={`/auction/broadcast/notice/${id}`}>
        <figure className={`notice-container ${mark === 1 ? 'imp' : ''}`}>
          {mark === 1 ? <img className="notice-mark" src={resultUrl} /> : null}
          <figcaption className="notice-title">{title}</figcaption>
        </figure>
      </Link>
    )
  }
}

CommonNotice.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  mark: PropTypes.number,
  imgUrl: PropTypes.string,
  imgHead: PropTypes.string,
}