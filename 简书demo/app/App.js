import React from 'react'
import Header from './common/header'
import store from './store/store'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'  //异步加载组件
import Login from './pages/login'
class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    )  
  }
}

export default App