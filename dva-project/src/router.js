import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import App from "./routes/App";
import Films from "./routes/Films";
import Cinemas from "./routes/Cinemas";
import Center from "./routes/Center";
import FilmDetail from "./routes/Films/FilmDetail";
import Login from "./routes/Login";

/* 当前dva集成router版本  "react-router-dom": "^4.1.2" */
function hasAuth() {
  return !!localStorage.getItem("token");
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        {/* 套一个app，app写公共header footer */}
        <Route
          path="/"
          render={() => (
            <App>
              <Switch>
                <Route path="/films" exact component={Films} />
                <Route path="/cinemas" exact component={Cinemas} />
                <Route
                  path="/center"
                  exact
                  render={() =>
                    hasAuth() ? (
                      <Center></Center>
                    ) : (
                      <Redirect to="/login"></Redirect>
                    )
                  }
                />
                <Route path="/film-detail/:id" exact component={FilmDetail} />
                <Redirect from="/" to="/films"></Redirect>
              </Switch>
            </App>
          )}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
