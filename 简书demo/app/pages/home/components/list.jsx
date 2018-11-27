import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  getHomeListData,
  getMoreAarticList
} from '../../../actions/homeActions'
import {
  ListWrapper,
  ListItem,
  ListText,
  HomeListMore
} from '../style'
class List extends Component {
  render() {
    const { list, getMoreList, articListPage } = this.props;
    const noPic = (url) => {
      if(url.length === 0) {
        return null;
      } else {
        return <img className = 'list-pic' src = { url } />
      }
    }
    return (
      <div>
        {
          list.map( (item, index) => {
            return(
              <ListWrapper key = { index }> {/*暂时用index*/}
                <ListItem>
                  { noPic(item.imgUrl) }
                  <h2 className = 'title'><Link to={ '/detail/' + item.id }>{ item.title }</Link></h2>
                  <ListText>{ item.text }</ListText>
                </ListItem>
              </ListWrapper>
            )
          } )
        }

        <HomeListMore className = 'listmore' onClick = { () => { getMoreList(articListPage); } }>阅读更多</HomeListMore>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeListData();
  }
}

const mapStateToProps = (state) => ({
  list: state.home.articleList,
  articListPage: state.home.articListPage
})

const mapDispatchToProps = (dispatch) => ({
  getHomeListData() {
    dispatch(getHomeListData());
  },
  getMoreList(articListPage) {
    dispatch(getMoreAarticList(articListPage));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);