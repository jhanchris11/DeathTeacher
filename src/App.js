import React, { Fragment } from "react";

import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderLayout from "./components/Layout/Header/HeaderLayout";
import Main from "./pages/Main";
import MessageBotState from "./context/messageBot/messageBotState";
import ProfessorState from "./context/professor/professorState";
import SpinnerState from "./context/spinner/spinnerState";

function App() {
  return (
    <SpinnerState>
      <ProfessorState>
        <MessageBotState>
          <Router>
            <Fragment>
              <Layout className="cl-layout">
                <Layout>
                  <HeaderLayout />

                  <Switch>
                    <Route exact path="/" component={Main} />
                  </Switch>
                </Layout>
              </Layout>
            </Fragment>
          </Router>
        </MessageBotState>
      </ProfessorState>
    </SpinnerState>
  );
}

export default App;
