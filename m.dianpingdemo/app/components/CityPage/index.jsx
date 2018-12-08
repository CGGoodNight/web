import React from 'react';
import { hashHistory } from "react-router";
import { getCityListAction, changeCurrentCityAction } from "../../actions/cityPageActions";
import CommonHeader from '../CommonHeader'
import { connect } from "react-redux"
import './style.less'

class CityPage extends React.Component {
  render() {
    if (this.props.cityList === '') {   //解决没有值发生的错误  方式二
      return null;
    }
    return (
      <div>
        <CommonHeader title='选择城市' />
        <div className="city_current">
          { this.props.params.name /*  得到主页路由上传过来的城市名字 */ }  
        </div>
        <div className="recommend_city">
          <div className="recommen_city_title">
            热门城市
          </div>
          <div className="recommend_city_container clearfix">
            {this.props.cityList.map((item, index) => {
              return <li onClick = { () => this.props.backBtnClick(item.name) } key={index}>{item.name}</li>
            })
            }
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getCityList();
  }

  
}

const mapStateToProps = state => ({
  cityList: state.cityPageReducer.cityList
})

const mapDispatchToProps = dispatch => ({
  getCityList() {
    dispatch(getCityListAction());
  },

  backBtnClick(currentCity) {
    dispatch(changeCurrentCityAction(currentCity));
    hashHistory.replace('/');
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(CityPage);