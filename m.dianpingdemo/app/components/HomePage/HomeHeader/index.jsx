import React from "react";
import { hashHistory } from "react-router";
import { connect } from 'react-redux';
import SearchInput from '../../SearchInput'
import "./style.less";

class HomeHeader extends React.Component {
  render() {
    return (
      <div className="clearfix homeheader">
        <div className="float-left home-header-left" onClick = { () => this.handleClick() }>
          {this.props.currentCity ? this.props.currentCity : "重庆"}
          <i className="iconfont icon-jiantou9" />
        </div>
        <div className="float-right home-header-right">
          <i className="iconfont icon-zhanghuffffffpx" onClick = { () => this.zhanghuHandleClick() } />
        </div>
        <div className="home-header-middle">
          <i className="iconfont icon-sousuo" />
          <SearchInput value="" enterHandle = { this.enterHandle.bind(this) } />
        </div>
      </div>
    )
  }
  zhanghuHandleClick() {
    hashHistory.push('/login');
  }
  enterHandle(value) {
    hashHistory.push('/search/all/' + encodeURIComponent(value));
  }
  handleClick() {
    if(this.props.currentCity) {
      hashHistory.push('/city/'+ this.props.currentCity +'');
    } else {
      hashHistory.push('/city/重庆')
    }
    
  }
}

const mapstate = (state) => ({
  currentCity: state.cityPageReducer.currentCity
})

export default connect(mapstate, null)(HomeHeader);
