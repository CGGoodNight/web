import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { 
  RecommendWrapper,
  RecommendItem
} from '../style'
import Item from 'antd/lib/list/Item';
class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map( (item) => {
            return(
              <RecommendItem key = { item.id }>
                <img src = { item.imgUrl } />
              </RecommendItem>
            )
          }
        )
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.home.hotList
})

export default connect(mapStateToProps, null)(Recommend);