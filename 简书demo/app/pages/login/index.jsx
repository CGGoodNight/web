import React from 'react'
import { login } from '../../actions/loginActionns'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Login extends React.Component {

  render() {
    const { loginClick } = this.props;
    if(!this.props.login) {
      return(
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef = { (input) => { this.account = input } } />
            <Input placeholder='密码' innerRef = { (input) => { this.pw = input } } type='password' className='pw' />
            <Button onClick = { () => loginClick(this.account, this.pw) }>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state) => ({
  login: state.login.login
})

const mapDispatch = (dispatch) => ({
  loginClick(acc, pw) {
    dispatch(login(acc.value, pw.value));
  }
});

export default connect(mapState, mapDispatch)(Login);