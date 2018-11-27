import React,{ Component } from 'react';
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='titleimg'
            src='../../static/images/titleimg.jpg'
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}
export default Home