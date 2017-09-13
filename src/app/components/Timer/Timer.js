import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime:props.startTime,
      remaining: '----:--:--',
      id: null,
      end:false,
    }
  }
  componentDidMount() {
    this.runTimer()
  }
  componentWillUnmount(){
    if(this.state.id != null){
      window.clearInterval(this.state.id)
    }
  }
  runTimer() {
    if (this.state.id == null) {
      this.setState({
        id:window.setInterval(this.timer.bind(this),1000)
      })
    }
  }
  timer() {
    const {startTime} = this.state
    const {endTime} = this.props
    if(this.state.end){
      window.clearInterval(this.state.id)
      this.setState({
        remaining: <span>拍卖结束</span>,
        id:null,
      },this.props.callback())
    }
    var diffSecond = parseInt((endTime - startTime) / 1000) //结束时间到现在差的秒数
    if (diffSecond > 0) {
      var offset = moment.duration(diffSecond, 'seconds')
      var month = offset.months()
      var day = offset.days()
      var hour = offset.hours()
      var minute = offset.minutes()
      var second = offset.seconds()
      if(month > 0){
        this.setState({
          remaining: '超过一个月',
          startTime:new Date(startTime.getTime()+1000),
          end:true,
        })
        return 
      }
      var diff = moment({ month: month, day: day, hour: hour, minute: minute, second: second })
      this.setState({
        remaining: diff.format('DD天HH时mm分ss秒'),
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
  },
}
Timer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  endTime: PropTypes.instanceOf(Date).isRequired,
  startTime: PropTypes.instanceOf(Date),
  callback: PropTypes.func,
}