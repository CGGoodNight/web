import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  ContextTitle
} from './style'
import { getDetailAjax } from '../../actions/detailActions'
import { connect } from 'react-redux'
class Detail extends React.Component {

  render() {
    const { title, imgUrl, contextTitle, context } = this.props;
    return(
      <DetailWrapper>
        <h1>{ title }</h1>
        <img src = { imgUrl } />
        <ContextTitle>{contextTitle}</ContextTitle>
        <div dangerouslySetInnerHTML={ {__html: context } }></div>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailList(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.detail.title,
  imgUrl: state.detail.imgUrl,
  contextTitle: state.detail.contextTitle,
  context: state.detail.context
})

const mapDispatchToProps = (dispatch) => ({
  getDetailList(id) {
    dispatch(getDetailAjax(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));