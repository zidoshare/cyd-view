import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
import './personPage.less'
import {Route} from 'react-router-dom'
import {ConnectedSwitch} from '../../reducers/index'
import InfoContainer from './routes/InfoPage/InfoContainer'
export default class PersonPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="person-container">
        <div className="person-container-wrapper clear-fix">
          <div className="person-left-menu pull-left">
            <ul>
              <li>
                <NavLink exact to="/person">
                  <Icon type="user" />个人信息
                </NavLink>
              </li>
              <li>
                <NavLink to="/person/auction">
                  <Icon type="pay-circle-o" />我的拍卖
                </NavLink>
              </li>
              <li>
                <NavLink to="/auction/send">
                  <Icon type="upload" />上传拍品
                </NavLink>
              </li>
              <li className="li-line">
              </li>
              <li>
                <NavLink to="/person/update/password">
                  <Icon type="lock" />修改密码
                </NavLink>
              </li>
            </ul>

          </div>
          <div className="pull-left person-right-content">
            <ConnectedSwitch>
              <Route component={InfoContainer}/>
            </ConnectedSwitch>
          </div>
        </div>
      </div>
    )
  }
}