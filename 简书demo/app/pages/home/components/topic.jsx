import React,{ Component } from 'react';
import { connect } from "react-redux";
import {
  TopWrapper,
  TopicItem,
  TopicMore
} from '../style'
class Topic extends Component {

  render() {
    const { topicList } = this.props;
    return (
      <TopWrapper>
        {
          topicList.map( (item) => {
            return(
              <TopicItem key = {item.id}>
                <img src={item.url} alt="64" />
                <span>{item.text}</span>
              </TopicItem>
            )
          } )
        }
        <TopicMore>更多热门专题 ></TopicMore>
      </TopWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.home.topicList
  }
}

export default connect(mapStateToProps,null)(Topic)