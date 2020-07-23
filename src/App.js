import React, { Fragment } from 'react';

import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Layout/Aside';
import Header from './components/Layout/Header';
import Login from './pages/Login';
import Register from './pages/Register'
import Main from './pages/Main';
import Questions from './pages/Questions';
import Profile from './pages/Profile';
import MessageState from './Context/MessageState';

function App() {
  return (
    <MessageState>
      <Router>
        <Fragment>

          <Layout className='cl-layout'>
            <Aside />
            <Layout>
              <Header />
              <Switch>
                <Route exact path='/Login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/' component={Main} />
                <Route exact path='/questions' component={Questions} />
                <Route exact path='/profile' component={Profile} />

              </Switch>
            </Layout>
          </Layout>
        </Fragment>
      </Router>
    </MessageState>
  )
}

export default App;
