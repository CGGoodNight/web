import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { getBusinessInfoAction, getCommentInfoAction } from '../../actions/detailActions'
import CommonHeader from '../../components/CommonHeader'
class Detail extends Component {

  render() {
    if (!this.props.detailInfo) {
      return null;
    } else if (!this.props.comment) {
      return null;
    }
    function star(count) {
      if (count == 0) {
        return (
          <div>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
          </div>
        )
      } else if (count == 1) {
        return (
          <div>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <div>4444</div>
          </div>
        )
      } else if (count == 2) {
        return (
          <div>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
          </div>
        )
      } else if (count == 3) {
        return (
          <div>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star"></i>
            <i className="iconfont icon-star"></i>
          </div>
        )
      } else if (count == 4) {
        return (
          <div>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star"></i>
          </div>
        )
      } else if (count == 5) {
        return (
          <div>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
            <i className="iconfont icon-star current"></i>
          </div>
        )
      }
    }
    return (
      <div>

        <CommonHeader title="商户详情" />
        <div className='clearfix detail_header_container'>
          <img src={require("../../" + this.props.detailInfo[0].imgUrl + ".jpg")} alt="" />
          <div>
            <h2>{this.props.detailInfo[0].title}</h2>
            {star(this.props.detailInfo[0].star)}
            <span>{this.props.detailInfo[0].price}</span>
            <h3>{this.props.detailInfo[0].appendTitle}</h3>
          </div>
        </div>
        <div className='detail_header_container_bottom'>
          <p dangerouslySetInnerHTML={{ __html: this.props.detailInfo[0].time }}></p>
        </div>
        <div className='detail_header_container_comment'>
          <h3>用户点评</h3>

          {/* <div className='detail_header_container_item_box'>
            <i className="iconfont icon-zhanghuffffffpx" />
            <span>133***44444</span>
            {star(this.props.detailInfo[0].star)}
            <div>
              很潮吹  分厂棒
            </div>
          </div> */}
          {this.props.comment.map((item, index) => {
            return <div key={index} className='detail_header_container_item_box'>
              <i className="iconfont icon-zhanghuffffffpx" />
              <span>{item.username}</span>
              {star(item.star)}
              <div>
                {item.comment}
            </div>
            </div>
          })}
        </div>
      </div>

    )
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.props.getBusinessInfo(id);
    this.props.getCommentInfo();
  }

}
const mapStateToProps = state => ({
  detailInfo: state.detailPageReducer.detailInfo,
  comment: state.detailPageReducer.comment
})
const mapDispatchToProps = dispatch => ({
  getBusinessInfo(id) {
    dispatch(getBusinessInfoAction(id));
  },
  getCommentInfo() {
    dispatch(getCommentInfoAction());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail);