import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import {checkUserAction} from '../../actions/loginActions'
import CommonHeader from '../../components/CommonHeader'
import './style.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''  //原本是验证码  ， 这里用密码代替之
    }
  }
  render() {
    return (
      <div className='relative login_box'>
        <CommonHeader title='登录' />
        <div className='login_container'>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.userChangeHandle(e)}
            placeholder='输入手机号'
          />
          <span className="top">
            <i className="iconfont icon-shoujihao">
            </i>
          </span>
          <input
            type="text"
            value={this.state.password}
            onChange={(e) => this.pwChangeHandle(e)}
            placeholder='输入验证码'
          />
          <span className="bottom">
            <i className="iconfont icon-yanzhengma">
            </i>
          </span>
          <span className="right_bottom">获取验证码</span>
          <div className='login_btn'><button onClick={() => this.props.checkUserInfo(this.state.userName, this.state.password) }>登录</button></div>
        </div>
      </div>
    )
  }
  userChangeHandle(e) {
    this.setState({
      userName: e.target.value
    })
  }
  pwChangeHandle(e) {
    this.setState({
      password: e.target.value
    })
  }
  CheckLogined() {
    if (this.props.isLogin === false) {
      console.log(0);
    } else {
      hashHistory.push("/user");
      console.log(1);
    }
  }
  componentDidMount() {
    this.CheckLogined();
  }
  componentDidUpdate() {
    this.CheckLogined();
  }
}
const mapState = state => ({
  isLogin: state.loginPageReducer.isLogin
})

const mapDispatch = dispatch => ({
  checkUserInfo(user, pw) {
    dispatch(checkUserAction(user, pw));
  }
})

export default connect(mapState, mapDispatch)(Login);