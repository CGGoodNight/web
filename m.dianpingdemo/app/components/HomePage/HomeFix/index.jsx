import React from 'react';
import ReactSwipe from 'react-swipe'; //轮播图插件
import { Link } from 'react-router';
import './style.less'
import food from '../../../static/images/food.png';
import movie from '../../../static/images/movie.png';
import hotel from '../../../static/images/hotel.png';
import entertainment from '../../../static/images/entertainment.png';
import Take_out_food from '../../../static/images/Take-out food.png';
import hot_pot from '../../../static/images/Hot Pot.png';
import gril from '../../../static/images/gril.png';
import shop from '../../../static/images/shop.png';
import travel from "../../../static/images/travel.png";
import KTV from "../../../static/images/KTV.png";
import wedding from "../../../static/images/wedding.png";
import life from "../../../static/images/life.png";
import jingdian from "../../../static/images/景点.png";
import aiche from "../../../static/images/aiche.png";
import jiangshen from "../../../static/images/jianshen.png";
import qinzi from "../../../static/images/qinzi.png";
import zhaungxiugongsi from "../../../static/images/zhaungxiugongsi.png";
import xuexi from "../../../static/images/学习培训.png";
import yiliao from "../../../static/images/yiliao.png";
import daojia from "../../../static/images/daojia.png";
import xiaochikuaican from "../../../static/images/xiaochikuaican.png";
import chikeiconapp from "../../../static/images/chikeiconapp.png";
import zizhucan from "../../../static/images/zizhucan.png";
import meifa from "../../../static/images/meifa.png";
import meijia from "../../../static/images/meijia.png";
import meirong from "../../../static/images/meirong.png";
import shoushen from "../../../static/images/shoushen.png";
import qinzisheying from "../../../static/images/qinzisheying.png";
import youerjiaoyu from "../../../static/images/youerjiaoyu.png";
import more from "../../../static/images/more.png";


class HomeFix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  render() {    
    return (
      <div>
        <ReactSwipe
          className="carousel scroll-pane"
          swipeOptions={
            {
              continuous: true,
              callback: (index) => {
                this.setState({
                  index
                })
              }
            }
          }>
          <div className='scroll-box'>  {/* 第一页 */}
            <div className='scroll-container'>
              <div className='scroll-item'>
                <Link to="/search/food">
                  <img src={ food } alt=""/>
                  <span>
                    美 食
                  </span>
                </Link>
                <Link to="/search/movie">
                  <img src={ movie } alt="" />
                  <span>
                    猫眼电影
                  </span>
                </Link>
                <Link to="/search/hotel">
                  <img src={ hotel } alt="" />
                  <span>
                    酒 店
                  </span>
                </Link>
                <Link to="/search/entertainment">
                  <img src={ entertainment } alt="" />
                  <span>
                    休闲娱乐
                  </span>
                </Link>
                <Link to="/search/Take_out_food">
                  <img src={ Take_out_food } alt="" />
                  <span>
                    外 卖
                  </span>
                </Link>
                <Link to="/search/hot_pot">
                  <img src={ hot_pot } alt="" />
                  <span>
                    火 锅
                  </span>
                </Link>
                <Link to ="/search/gril">
                  <img src={ gril } alt="" />
                  <span>
                    丽 人
                  </span>
                </Link>
                <Link to="/search/shop">
                  <img src={ shop } alt="" />
                  <span>
                    购 物
                  </span>
                </Link>
                <Link to="/search/travel">
                  <img src={ travel } alt="" />
                  <span>
                    周边游
                  </span>
                </Link>
                <Link to="/search/KTV">
                  <img src={ KTV } alt="" />
                  <span>
                    KTV
                  </span>
                </Link>

              </div>
            </div>
          </div>
          <div className='scroll-box'>  {/* 第二页 */}
            <div className='scroll-container'>
              <div className='scroll-item'>
                <Link to="/search/wedding">
                  <img src={ wedding } alt="" />
                  <span>
                    婚纱摄影
                  </span>
                </Link>
                <Link to="/search/life">
                  <img src={ life } alt="" />
                  <span>
                    生活服务
                  </span>
                </Link>
                <Link to="/search/jingdian">
                  <img src={ jingdian } alt="" />
                  <span>
                    景 点
                  </span>
                </Link>
                <Link to="/search/aiche">
                  <img src={ aiche } alt="" />
                  <span>
                    爱 车
                  </span>
                </Link>
                <Link to="/search/jiangshen">
                  <img src={ jiangshen } alt="" />
                  <span>
                    运动健身
                  </span>
                </Link>
                <Link to="/search/qinzi">
                  <img src={ qinzi } alt="" />
                  <span>
                    亲 子
                  </span>
                </Link>
                <Link to="/search/zhaungxiugongsi">
                  <img src={ zhaungxiugongsi } alt="" />
                  <span>
                    家 装
                  </span>
                </Link>
                <Link to="/search/xuexi">
                  <img src={ xuexi } alt="" />
                  <span>
                    学习培训
                  </span>
                </Link>
                <Link to="/search/yiliao">
                  <img src={ yiliao } alt="" />
                  <span>
                    医疗健康
                  </span>
                </Link>
                <Link to="/search/daojia">
                  <img src={ daojia } alt="" />
                  <span>
                    到 家
                  </span>
                </Link>

              </div>
            </div>
          </div>
          <div className='scroll-box'>  {/* 第三页 */}
            <div className='scroll-container'>
              <div className='scroll-item'>
                <Link to="/search/xiaochikuaican">
                  <img src={ xiaochikuaican } alt="" />
                  <span>
                    小吃快餐
                  </span>
                </Link>
                <Link to="/search/chikeiconapp">
                  <img src={ chikeiconapp } alt="" />
                  <span>
                    口腔齿科
                  </span>
                </Link>
                <Link to="/search/zizhucan">
                  <img src={ zizhucan } alt="" />
                  <span>
                    自助餐
                  </span>
                </Link>
                <Link to="/search/meifa">
                  <img src={ meifa } alt="" />
                  <span>
                    美 发
                  </span>
                </Link>
                <Link to="/search/meijia">
                  <img src={ meijia } alt="" />
                  <span>
                    美甲美睫
                  </span>
                </Link>
                <Link to="/search/meirong">
                  <img src={ meirong } alt="" />
                  <span>
                    美容SPA
                  </span>
                </Link>
                <Link to="/search/shoushen">
                  <img src={ shoushen } alt="" />
                  <span>
                    瘦身纤体
                  </span>
                </Link>
                <Link to="/search/qinzisheying">
                  <img src={ qinzisheying } alt="" />
                  <span>
                    亲子摄影
                  </span>
                </Link>
                <Link to="/search/youerjiaoyu">
                  <img src={ youerjiaoyu } alt="" />
                  <span>
                    幼儿教育
                  </span>
                </Link>
                <Link to="/">
                  <img src={ more } alt="" />
                  <span>
                    全部分类
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </ReactSwipe>
        <ul className="circles" ref={ref => this.ulScroll = ref}>
          <li className={this.state.index === 0 ? 'on' : ''}></li>
          <li className={this.state.index === 1 ? 'on' : ''}></li>
          <li className={this.state.index === 2 ? 'on' : ''}></li>
        </ul>
      </div>
    )
  }
}

export default HomeFix;