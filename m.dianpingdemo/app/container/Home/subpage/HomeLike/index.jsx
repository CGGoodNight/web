import React from 'react';
import { connect } from 'react-redux';
import { getLikeDataAction, getLoadMoreAction } from '../../../../actions/headerActions';
import './style.less';

class HomeLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoading: false
    };
  }
  render() {
    const { homeLike } = this.props;
    if (homeLike === '') {   //解决没有值发生的错误  方式二
      return null;
    }
    return (
      <div className='homelike-box'>
        <h2>猜你喜欢</h2>
        <div className='homelike-container'>
          {homeLike.map((item, index) => {
            let img = item.imgUrl;
            return <li key={index} className='clearfix'>
              <a href={item.link}>
                <img src={require("../../../../" + img + ".jpg")} alt="" />
                {/* <img src={item.imgUrl} alt="" /> */}
                <h3>{item.title}</h3>
                <p>{item.title_more}</p>
                <div className='item_price'>
                  <ins className='right_price'>￥{item.truePic}</ins>
                  <ins className='old_price'>￥{item.outPic}</ins>
                  <span>已售{item.sale}</span>
                </div>
              </a>
            </li>
          })}
        </div>
        <div className="load-more">
          {this.state.isLoading ?
            <div className="loading">
              加载中 <i className="iconfont icon-shuaxin" />
            </div>
            :
            <div className="load_more_click" onClick={() => this.loadMoreClick()} ref={(load_more_box) => { this.load_more_box = load_more_box }}>
              点击加载更多 <i className="iconfont icon-shuaxin" />
            </div>}
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.currentCity == '') {
      this.props.getLikeData(this.state.page, "重庆");
    } else {
      this.props.getLikeData(this.state.page, this.props.currentCity);
    }
    

    //组件加载完成后为window注册scroll时间
    window.addEventListener('scroll', function () {
      if (this.load_more_box === null) {     //解决当路由跳转回来时，getBoundingClientRect()方法有问题
        return
      } else {
        let top = this.load_more_box.getBoundingClientRect().top;   //getBoundingClientRect()方法获取到盒子到相对于浏览器窗口的距离
        let broHeight = window.screen.height;
        function callback() {
          if (top && top < broHeight) {
            this.loadMoreClick();
          }
        }
        let timeId;
        if (timeId) {
          clearTimeout(timeId);
        }
        timeId = setTimeout(callback.bind(this), 50);
      }

    }.bind(this))
  }
  loadMoreClick() {
    let page = this.state.page;
    if (page === 3) {
      page = 0;
    }   //if为了一直是为了开发时数据无限，上一行则是原始代码
    this.setState({
      isLoading: true
    });
    if (this.props.currentCity == '') {
      this.props.loadMoreData(page, "重庆");
    } else {
      this.props.loadMoreData(page, this.props.currentCity);
    }
    this.setState({
      isLoading: false,
      page: page + 1
    });
  }
}

const mapStateToProps = (state) => ({
  homeLike: state.homeheaderReducer.homeheaderLike,
  currentCity: state.cityPageReducer.currentCity

});

const mapDispatchToProps = (dispatch) => ({
  getLikeData(page, city) {
    dispatch(getLikeDataAction(page, city));
  },
  loadMoreData(page, city) {
    dispatch(getLoadMoreAction(page + 1, city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeLike);