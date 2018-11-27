import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom'
import { 
  SeachInput_Focused,
  SeachInput_Blur,
  getListAreaAjax,
  listMouseEnter,
  listMouseLeave,
  changeNextList,
  toggleBackTop
 } from '../../actions/headerActions'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addtion,
  Button,
  NavSearch,
  NavSearchBox,
  SearchList,
  SearchListTitle,
  SearchListSwitch,
  SearchListItem,
  SearchListItemBox,
  BackTop
} from "./style.js";
import { connect } from "react-redux";
import { exitLogin } from '../../actions/loginActionns'
class Header extends React.Component {
  getListArea = (fo, mo) => {  //fo聚焦  mo mouseIn 
    const pageList=[];
    if(this.props.list.length){
      for (let i = (this.props.page - 1) * 10; i < this.props.page *10; i++) {
        pageList.push(
        <SearchListItem key = {this.props.list[i]}>{this.props.list[i]}</SearchListItem>
        )
      }
    }

    if (fo || mo) {
      return (
        <SearchList 
          onMouseEnter = { () => this.props.mouseEnter() }
          onMouseLeave = { () => this.props.mouseLeave() }
         >
          <SearchListTitle>
            热门搜索
            <SearchListSwitch onClick = {() => this.props.changeList(this.props.page, this.props.totalPage, this.spinicon)}>
              <i ref = {(icon)=>{this.spinicon = icon }} className="iconfont spin" style={{ fontSize: 12 }}>
                &#xe851;{" "}
              </i>
              换一批
            </SearchListSwitch>
            <SearchListItemBox>
              {
                pageList
              }
            </SearchListItemBox>
          </SearchListTitle>
        </SearchList>
      );
    } else {
      return null;
    }
  };

  backtop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">
            <i className="iconfont" style={{ fontSize: 18 }}>
              &#xe60f;{" "}
            </i>
            首页
          </NavItem>
          <NavItem className="left">
            <i className="iconfont" style={{ fontSize: 18 }}>
              &#xe61f;{" "}
            </i>
            下载App
          </NavItem>
          {
            this.props.login ? 
              <Link to='/'><NavItem className="right" onClick = { () => this.props.exit_login() } >退出</NavItem></Link> :
              <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }
          
          <NavItem className="right">
            <i className="iconfont" style={{ fontSize: 18 }}>
              &#xe636;{" "}
            </i>
          </NavItem>
          <NavSearchBox>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={() => this.props.handleInputBlur()}
              />
            </CSSTransition>
            <i
              className="iconfont"
              className={this.props.focused ? "focused iconfont zoom" : "iconfont zoom"}
              style={{ fontSize: 18 }}
            >
              &#xe62b;{" "}
            </i>
            {this.getListArea(this.props.focused, this.props.mouseIn)}
          </NavSearchBox>
        </Nav>
        <Addtion>
          <Button className="btnRight">
            <i className="iconfont" style={{ fontSize: 18 }}>
              &#xe601;{" "}
            </i>
            写文章
          </Button>
          <Button className="btnLeft">注册</Button>
        </Addtion>
        {
          this.props.showBackTop ? <BackTop onClick = { () => this.backtop() }><i className="iconfont" style={{ fontSize: 12 }}>&#xe647;</i></BackTop> : null
        }
      </HeaderWrapper>
    );
  }

  componentDidMount() {
    this.bindEvent();
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }
}


const mapStateToProps = state => {
  return {
    focused: state.header.focused,
    list: state.header.list,
    mouseIn: state.header.mouseIn,
    page: state.header.page,
    totalPage: state.header.totalPage,
    showBackTop: state.header.showBackTop,
    login: state.login.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      if(list.length === 0 ) {
        dispatch(getListAreaAjax());
      }
      dispatch(SeachInput_Focused());
    },

    handleInputBlur() {
      dispatch(SeachInput_Blur());
    },
    mouseEnter() {
      dispatch(listMouseEnter());
    },
    mouseLeave() {
      dispatch(listMouseLeave());
    },
    changeList(page, totalPage,spinicon) {

      let orginAngle = spinicon.style.transform.replace(/[^0-9]/ig, '');
      if (orginAngle) {
        orginAngle = parseInt(orginAngle, 10);
      } else {
        orginAngle = 0;
      }
      spinicon.style.transform = 'rotate(' + (orginAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(changeNextList(page + 1));
      }else {
        dispatch(changeNextList(1));
      }
      
    },
    changeScrollShow() {
      if(document.documentElement.scrollTop > 100) {
        dispatch(toggleBackTop(true));
      }else {
        dispatch(toggleBackTop(false));
      }
    },
    exit_login() {
      dispatch(exitLogin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
