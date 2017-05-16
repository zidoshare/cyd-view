import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class Footer extends React.Component {

  render() {
    const props = { ...this.props }
    delete props.isMode
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
            <div className="pan">友情链接</div>
            <div className="pan2">
                <ul>
                    <li><a href="http://www.ccb.com/cn/home/indexv3.html"><img src="http://oow7renvm.bkt.clouddn.com/jsbank.jpg"width="100" height="30"/></a></li>
                    <li><a href="http://www.cmbc.com.cn/"><img src="http://oow7renvm.bkt.clouddn.com/msbank.jpg"width="100" height="30"/></a></li>
                    <li><a href="http://www.icbc.com.cn/icbc/"><img src="http://oow7renvm.bkt.clouddn.com/gsbank.jpg"width="100" height="30"/></a></li>
                    <li><a href="http://bank.pingan.com"><img src="http://oow7renvm.bkt.clouddn.com/pabank.jpg"width="100" height="30"/></a></li>
                    <li><a href="http://www.abchina.com/cn/"><img src="http://oow7renvm.bkt.clouddn.com/nybank.jpg"width="100" height="30"/></a></li>
                    <li><a href="http://www.bankcomm.com/BankCommSite/default.shtml"><img src="http://oow7renvm.bkt.clouddn.com/jtbank.jpg"width="100" height="30"/></a></li>
                </ul>
            </div>
            <div className="pan3">
                <ul>
                    <li><a href="http://www.njscae.com/"><img src="http://oow7renvm.bkt.clouddn.com/njwjs.JPG"width="100" height="40"/></a></li>
                    <li><a href="http://www.30scp.com/"><img src="http://oow7renvm.bkt.clouddn.com/sdllg.JPG"width="100" height="40"/></a></li>
                    <li><a href="http://www.agyoubika.com/"><img src="http://oow7renvm.bkt.clouddn.com/ggjys.JPG"width="100" height="40"/></a></li>
                    <li><a href="http://www.pingan.com/"><img src="http://oow7renvm.bkt.clouddn.com/pabx.JPG"width="100" height="40"/></a></li>
                </ul>
            </div>
            <div className="clear"></div>
            <div>Copyright © 2017 <a href="http://www.chuangyuandi.net.cn">成都创源地文化传播有限公司</a> All Rights Reserved</div>
            <div>备案号：蜀ICP备17010963号-1</div>
            <div>电话：028-69290215</div>
            <div>地址：成都市成华区建设路钻石广场B座2310</div>
        </span>
      </TweenOne>
    </OverPack>)
  }
}

Footer.defaultProps = {
  className: 'footer0',
}

export default Footer
