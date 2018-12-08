import React, { Component } from 'react';
import './style.less';

class CommonHeader extends Component {
  render() {
    return (
      <div>
        <div className="common_home_header">
          <div className="common_header_back" onClick={() => this.backClickHandle()}> &lt; </div>
          <span>{ this.props.title }</span>
        </div>
      </div>
    )
  }
  backClickHandle() {
    window.history.back();
  }
}

export default CommonHeader;