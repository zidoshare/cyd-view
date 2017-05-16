import React from 'react'
import {Layout, Button} from 'antd'
import QueueAnim from 'rc-queue-anim'
const Content = Layout.Content
import './Partner.scss'
export default class Partner extends React.Component {
  render() {
    return (
      <Content className="all-content">
        <QueueAnim component="ul" className="partner" type={'bottom'}>
          {[
            <li key={'li1'}><QueueAnim type={'bottom'} className="item"> {[
              <div key={'li1div1'} className="item-logo"><img src={'http://oow7renvm.bkt.clouddn.com/njwjs1.png'}/>
              </div>,
              <div key={'li1div2'}><p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南京文交所钱币邮票交易中心有限公司聚集国内钱币邮票界专业团队整合优质资源打造的钱币邮票交易平台。钱币邮票交易中心推行的交易模式是创新的实物挂牌模式，是把发展文化产业与金融创新结合起来。
                钱币邮票交易中心的成立，将促进钱币邮票收藏品的市场流动
                ,使大众投资者的投资品种由目前的股票、银行理财、保险业务扩展到文化艺术品尤其是钱币邮票投资领域，对扩大钱币邮票收藏群体规模将起到十分积极的作用。未来钱币邮票交易中心在线上实物交易的基础上，还将丰富拓展以下功能：钱币邮票藏品集散中心、钱币邮票托管交收中心、文化收藏品类理财中心、钱币邮票学术中心、钱币邮票会展中心。
                钱币邮票交易中心定位：作为全国首家钱币邮票实物挂牌交易平台、全国首家公开集中的钱币邮票线上交易平台，将建设成为全国钱币邮票交易领域的标杆性平台。 </p></div>,
              <div key={'li1div3'}><Button type="primary" size="large"  onClick={()=>{window.open('http://web.zgqbyp.com/qbypkh/?id=2713')}}> 立即开户 </Button></div>
            ]} </QueueAnim></li>,
            <li key={'li2'}>
              <QueueAnim type={'bottom'} className="item">
                {[
                  <div className="item-logo" key={'li2div1'}><img src={'http://oow7renvm.bkt.clouddn.com/agwj.png'}/>
                  </div>,
                  <div key={'li2div2'}><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安徽安贵大宗商品电子商务现货市场有限公司成
                    立于2014年6月份，注册资金5000万人民币，公司位于安徽省北部偏西、淮河岸边的淮南，这里既是中国能源之都也是华东工业粮仓。安徽安贵大宗商品交
                    易中心是安徽省淮南市政府大力扶持的企业重点金融项目，也是淮南市及周边地区唯一一家综合性大宗商品交易中心企业。安贵交易中心在国家法律法规范围内开展
                    大宗商品现货电子交易，交易品种涵盖：国际原油、煤炭、化工原料、大宗商品、现货铜、矿产品、农副产品以及棉产品现货交易、批发零售、回收、配送及延期交
                    收业务，并为以上产品提供电子交易平台及信息咨询、培训等相关服务。
                    按照省政府“总量控制、合理布局、审慎审批”的原则，安贵大宗商品交易中心已在高新区注册5000万元成立了“安徽安贵大宗商品电子商务现货市场有限公司”作为附属基础策应保障企业。 </p></div>,
                  <div key={'li2div3'}><Button type="default" size="large" onClick={()=>{window.open('http://register.agybk.com:15926/SelfOpenAccount/index.jsp?brokerage=0019001')}}> 立即开户 </Button></div>
                ]}
              </QueueAnim>
            </li>,
            <li key="li3">
              <QueueAnim type={'bottom'} className="item">
                {[
                  <div className="item-logo" key={'li3div1'}><img src={'http://oow7renvm.bkt.clouddn.com/30wj.png'}/>
                  </div>,
                  <div key={'li3div2'}><p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“叁点零收藏品交易中心”是由杭州3.0易货交易所与上海英泓实业有限公司联合发起设立的，以收藏品为主要交易品种的综合性专业文化交易机构。杭州叁点零易货交易所是国际贸易协会(IRTA)中国唯一I的懂事会成员，
                    2012年6月成为浙江省杭州市唯一首批通过“国务院清理整顿交易场所部际联席会议领导小组（证监会）”检查验收的商品交易所。
                    叁点零收藏品交易中心将凭借上海作为国际化金融中心的战略定位，打造辐射整个长三角地区乃至全国的文化艺术资源配置平台。 </p>
                  </div>,
                  <div key={'li3div3'}><Button type="primary" size="large" onClick={()=>{window.open('http://www.30scp.com/openacc/')}}> 立即开户 </Button></div>
                ]}
              </QueueAnim>
            </li>
          ]}
        </QueueAnim>
      </Content>
    )
  }
}
