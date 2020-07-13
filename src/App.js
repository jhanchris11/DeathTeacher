import React, { Fragment } from 'react';

import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Layout/Aside';
import Header from './components/Layout/Header'
import Main from './pages/Main';
import Questions from './pages/Questions';
import Profile from './pages/Profile';
import Chat from './components/Bot/Chat/Chat';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          {/* <Route exact path='/chat' component={Chat} /> */}
          <Layout className='cl-layout'>
            <Aside />
            <Layout>
              <Header />
              <Route exact path='/' component={Main} />
              <Route exact path='/questions' component={Questions} />
              <Route exact path='/profile' component={Profile} />
            
            </Layout>
          </Layout>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
