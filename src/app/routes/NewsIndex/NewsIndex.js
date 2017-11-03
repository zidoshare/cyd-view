import React, { Component } from 'react'
import {Carousel,Spin} from 'antd'
import {Link} from 'react-router-dom'
import './NewsIndex.less'
import { get, formartData } from '../../Util'
import apiUrl from '../../apiUrl'
export default class NewsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      gallery:[],
      galleryLoading:false,
      current:{title:'加载中...'},
      loading:false,
      news:[],
      newsLoading:false,
      notices:[],
      noticeLoading:false,
      video:{},
      products:[],
    }
  }
  loadGallery(){
    this.setState({
      galleryLoading:true,
    })
    get(apiUrl.newsBannerUrl).then(json => {
      if (json.success) {
        this.setState({
          gallery: json.data,
          galleryLoading:false,
          current:json.data.length > 0?json.data[0]:{
            title:'暂无数据',
          },
        })
      }
    })
  }

  loadNewsList(){
    this.setState({
      newsLoading:true,
    })
    get(apiUrl.newsUrl).then(json => {
      if (json.success) {
        this.setState({
          news: json.data.records,
          newsLoading:false,
        })
      }
    })
  }
  loadNoticeList(){
    this.setState({
      noticeLoading:true,
    })
    get(apiUrl.noticeUrl).then(json => {
      if (json.success) {
        this.setState({
          notices: json.data.records,
          noticeLoading:false,
        })
      }
    })
  }
  changeTitle(c = 1){
    const {gallery,galleryLoading} = this.state
    if(!gallery && galleryLoading){
      this.setState({
        current:'加载中...'
      })
      return
    } else if(!gallery){
      this.setState({
        current:'暂无数据'
      })
      return
    }
    this.setState({
      current:gallery[c],
    })
  }

  loadVideo(){
    get(apiUrl.videoUrl).then(json => {
      if (json.success) {
        this.setState({
          video:json.data,
        })
      }
    })
  }
  loadProducts(){
    get(apiUrl.productsUrl).then(json => {
      if(json.success){
        this.setState({
          products:json.data,
        })
      }
    })
  }
  componentDidMount(){
    this.loadGallery()
    this.loadNewsList()
    this.loadNoticeList()
    this.loadVideo()
    this.loadProducts()
  }
  render() {
    const {gallery,galleryLoading,current,news,newsLoading,noticeLoading,notices,video,products} = this.state
    return (
      <div className="news-index-content-wrapper">
        <div className="clear-fix">
          <div className="news-carousel-container pull-left">
            {galleryLoading?<Spin spining={galleryLoading} className="gallery-loading"/>:<div>
                <Carousel 
                dotsClass="news-dots" 
                autoplay
                afterChange={this.changeTitle.bind(this)}>
                  {gallery.map((value) => {
                    return (<div><Link to={`/news/list/info/${current.id}`}>
                        <img src={value.imageUrl}/>
                      </Link>
                    </div>)
                  })}
                </Carousel>
                <div className="slick-title-panel">
                  <h2><Link to={`/news/list/info/${current.id}`}>{current.title}</Link></h2>
                </div>
              </div>}
            
          </div>
          <div className="notice-container pull-right">
            <div>
              <h1 className="title-container">通知公告<span>Notice</span></h1>
              <Spin spinning={noticeLoading}>
                <ul className="notice-list">
                  {notices.length>0?notices.map((value,index) => (
                    <li key={index}><Link to={`/news/list/notice/info/${value.id}`}>{index+1}:{value.title}</Link></li>
                  )):<div/>}
                </ul>
              </Spin>
              <Link to="/news/list/notice">更多&gt;&gt;&gt; </Link>
            </div>
          </div>
        </div>
        <div className="clear-fix bg-center far-top" style={{backgroundImage:'url(http://odp22tnw6.bkt.clouddn.com/v1/commodity/news-bg.jpg)'}}>
          <div className="pull-left video-container">
            <h1 className="title-container">视频<span>Video</span></h1>
            <video className="video-ins" autoPlay controls height={360} poster={video.videoInfo} src={video.videoUrl} width={'100%'}>
              你的浏览器暂不支持h5播放器，请升级
            </video>
            <div className="bg-center chat-ins" style={{backgroundImage:'url(http://odp22tnw6.bkt.clouddn.com/v1/commodity/news-bg.jpg)'}}>
                <div className="pull-left">
                 <img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/chat-to-service.png"/>
                </div>
                <div className="pull-left chat-info">
                  <h1>
                    联系我们
                  </h1>
                  <h1>
                    400-886-6563
                  </h1>
                </div>
            </div>
          </div>
          <div className="news-container-list-wrapper pull-left">
            <h1 className="title-container">新闻中心<span>News</span></h1>
            <Spin spinning={newsLoading}>
              <ul className="news-index-list">
                {news.length>0?news.map((value,index) => {
                  if(index === 0){
                    return <li key={value.id} className="news-link-title">
                      <Link to={`/news/list/info/${value.id}`}>
                        <img src={value.imageUrl}/>
                        <div>
                          <span>{value.title}</span>
                          <p>{value.description}</p>
                        </div>
                      </Link>
                    </li>
                  }
                  return <li key={value.id} className="news-link-title">
                    <Link to={`/news/list/info/${value.id}`}><span>{value.title}</span><span className="after-foot">{formartData(new Date(value.createTime),'MM-dd')}</span></Link>
                  </li>
                }):<div></div>}
              </ul>
              <div className="pull-right">
                <br/>
              <Link to="/news/list">更多&gt;&gt;&gt; </Link>
              </div>
              </Spin>
          </div>
        </div>
        <div className="bg-center far-top new-arraival-wrapper"  style={{backgroundImage:'url(http://odp22tnw6.bkt.clouddn.com/v1/commodity/news-bg.jpg)'}}>
          <h1 className="title-container">新品上架<span>New Arrival</span></h1>
          <Carousel dots={false}
                autoplay
                draggable
                slidesToShow={3}>
                {products.map((value) => (
                  <div>
                    <img src={value.imageUrl}/>
                  </div>
                ))}
                
          </Carousel>
        </div>
      </div>
    )
  }
}