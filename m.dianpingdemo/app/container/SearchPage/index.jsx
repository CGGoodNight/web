import React, { Component } from 'react';
import List from './subPage/List';
import { hashHistory } from 'react-router'
import './style.less';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <div>
        <div className="homeheader">
          <span onClick={() => this.backClickHandle()}> &lt; </span>
          <div className="home-header-middle">
            <i className="iconfont icon-sousuo" />
            <input
              type="text"
              value={this.state.inputValue}
              placeholder="输入商户名、地点"
              onChange={(e) => this.inputChangeHandle(e)}
              onKeyDown={(e) => this.enterHandle(e)}
            />
          </div>
        </div>
        <List /> { /** 套用了HomeLike的组件，没有自己写，所以用户搜索得到的内容和猜你喜欢一样 */}
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      inputValue: this.props.params.searchkeyword ? this.props.params.searchkeyword : ''
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.inputValue == this.state.inputValue) {
      return false;
    }
    return true;
  }
  enterHandle(e) {
    if (e.keyCode === 13) {
      hashHistory.replace('/search/all/' + this.state.inputValue + '');
    }
  }
  inputChangeHandle(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  backClickHandle() {
    window.history.back();
  }
}
export default SearchPage;