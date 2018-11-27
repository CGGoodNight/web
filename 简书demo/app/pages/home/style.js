import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HomeWrapper = styled.div`
  padding-top: 30px;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  .titleimg {
    width: 100%;
    height: 270px;
`;

export const HomeRight = styled.div`
  float: left;
  width: 280px;
  margin-left: 30px;
  background-color: yellow;
`;

export const TopWrapper = styled.div`
    margin-left: -18px;
    margin-top: 15px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicMore = styled.a.attrs({
  href: '/'
  }
)`
    font-size: 14px;
    color: #787878;
    margin-left: 20px;
    text-decoration: none;
`;

export const TopicItem = styled.a`
    margin-left: 18px;
    margin-top: 20px;
    display: inline-block;
    font-size: 14px;
    background-color: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    
    img{
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border-radius: 2px;
    }
    span {
      padding: 0 11px 0 11px;
    }
`;

export const ListWrapper = styled.div`
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    padding: 15px 0 20px;
`;

export const ListItem = styled.div`
  .list-pic {
    width: 125px;
    height: 100px;
    float: right;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const ListText = styled.div`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;

export const HomeListMore = styled.div`
  width: 625px;
  height: 40px;
  line-height: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  background-color: #a5a5a5;
  box-sizing: border-box;
  &.listmore:hover {
    background-color: #9b9b9b;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  background-color: #fff;
`;

export const RecommendItem = styled.a.attrs({
  href: '/'
})`
  display: block;
  width: 100%;
  margin-bottom: 3px;
  border-radius: 4px;
  img {
    width: 100%;
  }
`;
