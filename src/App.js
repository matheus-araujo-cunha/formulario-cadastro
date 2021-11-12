import "./App.css";

import Form from "./components/Form";
import User from "./components/User";

import { Toaster } from "react-hot-toast";

import AppHeader from "./styles";

import { useState } from "react";

import { Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <AppHeader isLogged={isLogged}>
        <Switch>
          <Route exact path="/">
            <Form setUser={setUser} user={user} setIsLogged={setIsLogged} />
          </Route>
          (
          <Route exact path="/user/:name">
            <User
              isLogged={isLogged}
              user={user}
              setUser={setUser}
              setIsLogged={setIsLogged}
            />
          </Route>
          )
        </Switch>
      </AppHeader>
    </div>
  );
}

export default App;
