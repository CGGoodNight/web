import React, { Component } from 'react';
import './style.less';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  render() {
    return (
      <div>
        <input
          className="sear-input"
          type="text"
          placeholder="输入商户名、地点"
          value = {this.setState.inputValue}   //约束性  尽量不使用refs属性(对dom进行直接的操作)
          onChange = { (e) => this.onChangeHandle(e) }
          onKeyUp={(e) => this.enterHandle(e)}
        />
      </div>
    )
  }

  onChangeHandle(e) {
    this.setState({
      inputValue: e.target.value
    })    
  }
  enterHandle(e) {
    if(e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(this.state.inputValue);
    

  }
}

export default SearchInput;