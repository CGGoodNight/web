import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  left: 10%;
  height: 100%;
  width: 100px;
  display: block;
  background: url(${ logoPic });
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 58px; 
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 20px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #f10215;
  }
`;

export const Addtion = styled.div`
  position: absolute;
  right: 100px;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  margin-right: 20px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 19px;
  padding: 0 20px;
  &.btnLeft {
    color: #ea6f5a;
  }
  &.btnRight {
    background-color: #ea6f5a;
    color: #fff;
  }
`;

export const NavSearch = styled.input.attrs( {
  placeholder: '搜索'
} )`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  font-size: 14px;
  $::placeholder {
    color: #eee;
  };
  &.focused {
    width: 300px;
  };
  &.slide-enter {
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {  
    width: 300px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;

export const SearchList = styled.div`
  width: 240px;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);

`;

export const SearchListTitle = styled.div`
  padding: 10px;
  margin-top: 15px;
  color: #969696;
  font-size: 14px;
`;

export const SearchListSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-left: 3px;
    transition: all 0.4s ease-in;
  }
`;

export const SearchListItemBox = styled.div`
  margin: 10px 0;
  a {
    text-decoration: none;
  }
`;

export const SearchListItem = styled.a.attrs({
  href: 'javascript:void(0)'
})`
  margin: 5px 5px;
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const NavSearchBox = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #bbb;
      color: #fff;
    }
  }
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border: 2px solid #ccc;
  line-height: 40px;
  text-align: center;
  color: #333;
  cursor: pointer;
  border-radius: 8px;
`;