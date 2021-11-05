import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserId } from "./components/NewChat";
import Landing from "./components/Landing";
import SwitchTabs from "./components/SwitchTabs";
import OTPView from "./components/OTPView";
import Profilepic, { databaseFromProfile } from "./components/Profilepic";

function App() {
  const [loggedUserState] = useState(localStorage.getItem("loggedUser"));

  const database = JSON.parse(localStorage.getItem("database"));

  return (
    <div className="App">
      {/* <ChatPage /> */}
      <div className="app__body">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                loggedUserState ? (
                  <SwitchTabs
                    {...props}
                    user={JSON.parse(loggedUserState)}
                    database={database}
                  />
                ) : (
                  <Landing {...props} />
                )
              }
            />

            <Route path="/otp" exact component={OTPView} />
            <Route
              path="/chats"
              exact
              render={(props) => (
                <SwitchTabs
                  {...props}
                  user={JSON.parse(loggedUserState)}
                  database={databaseFromProfile}
                />
              )}
            />
            <Route
              path="/profile"
              exact
              render={(props) => <Profilepic {...props} />}
            />
            <Route
              path="/landing"
              exact
              render={(props) => <Landing {...props} />}
            />

            <Route
              path={`/chats/:${UserId}`}
              render={() => (
                <Chat id={UserId} user={JSON.parse(loggedUserState)} />
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
