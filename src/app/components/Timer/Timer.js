import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endTime: props.endTime,
      startTime: props.startTime,
      remaining: '----:--:--',
      id: null,
    }
  }
  componentDidMount() {
    this.runTimer()
  }
  runTimer() {
    if (this.state.id == null) {
      this.setState({
        id:window.setInterval(this.timer.bind(this),1000)
      })
    }
  }
  timer() {
    const {startTime,endTime} = this.state
    var diffSecond = parseInt((endTime - startTime) / 1000) //结束时间到现在差的秒数
    if (diffSecond > 0) {
      var offset = moment.duration(diffSecond, 'seconds')
      var month = offset.months()
      var day = offset.days()
      var hour = offset.hours()
      var minute = offset.minutes()
      var second = offset.seconds()

      var diff = moment({ month: month, day: day, hour: hour, minute: minute, second: second })
      
      this.setState({
        remaining: diff.format('D天HH时mm分ss秒'),
        startTime:new Date(startTime.getTime()+1000)
      })
    } else {
      //timeout..
      window.clearInterval(this.state.id)
      this.setState({
        remaining: <span>拍卖结束</span>,
        id:null,
      },this.props.callback())
    }
  }
  // var id = ;
  render() {
    const { style, className } = this.props
    return (
      <span style={style} className={className}>
        {this.state.remaining}
      </span>
    )
  }
}

Timer.defaultProps = {
  startTime: new Date(),
  callback: () => {
    console.log('倒计时结束')
  },
}
Timer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  endTime: PropTypes.instanceOf(Date),
  startTime: PropTypes.instanceOf(Date),
  callback: PropTypes.func,
}