import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './publics/redux/store'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './screens/home';
import SettingPattern from './screens/settingPattern';
import SettingSound from './screens/settingSound';
import Leaderboard from './screens/leaderboard';
import Navbar from './screens/navbar';
import Login from './screens/login';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' render={()=><Navbar />}/>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/settingPattern' exact render={() => <SettingPattern />} />
            <Route path='/settingSound' exact render={() => <SettingSound />} />
            <Route path='/leaderboard' exact render={() => <Leaderboard />} />
            <Route path='/login' exact render={() => <Login />} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
