import React from 'react';
import { connect } from 'react-redux';
import { getDataAjax } from '../../../../actions/headerActions'
import './style.less';

class HomeAd extends React.Component {
  render() {
    return (
      <div className='home-ad-box'>
        <h2>超值优惠</h2>
        <div className='container-home-ad'>
          <ul>
            {this.props.homeAdList ? this.props.homeAdList.map((item, index) => {
              return <li key={index}>
                <a href={item.link}>
                  <img src={item.imgUrl} alt="" />
                  <span className='prd-title'>{item.title}</span>
                  <p>
                    <span className='true-pic'>￥{item.truePic}</span>
                    <span className='out-pic'>￥{item.outPic}</span>
                  </p>
                </a>
              </li>

            }) : ''}
            {
              //使用三元表达式是为了第一次渲染是为了解决props没有数据导致页面出错
            }

          </ul>
          <a className='AdMore' href="https://github.com/CGGoodNight">更多优惠 ></a>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHeaderData();  //从connect中的mapDispatch方法，然后通过thunk中间件的action函数进行获取数据
  }
}

const mapStateToProps = (state) => ({
  homeAdList: state.homeheaderReducer.homeheaderList
});

const mapDispatchToProps = (dispatch) => ({
  getHeaderData() {
    dispatch(getDataAjax());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeAd);