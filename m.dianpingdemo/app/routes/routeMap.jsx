import React, { Component } from "react";
import { Route, IndexRoute, hashHistory, Router } from "react-router";

// -------------------------------------------------  pc端路由  -------------------------------------------------
import App from '../App';
import CityPage from '../components/CityPage';
import SearchPage from '../container/SearchPage';
import Detail from '../container/Detail';
import Login from '../container/Login';
import User from '../container/User'



class RouteMap extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">   {  /** 路由传参 见README.md  */}
          <IndexRoute component={App} />
          <Route path="/city/:name" component={CityPage}></Route>
          <Route path="/search/:keyword(/:searchkeyword)" component={SearchPage}></Route>  { /** keyword 通过轮播图点击传递的 search则是搜索框传递的 */ }
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/user" component={User}></Route>
        </Route>
      </Router>
    );
  }
}

export default RouteMap;
