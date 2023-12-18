import { Route, Switch,Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Title from "./Title";
import NotFound from "./NotFound";
import Post from "./Post";
import { useState } from "react";
import Profile from "./Profile";
function App() {
  const [login, setLogin] = useState(false);
  const [accessContact, setAccessContact] = useState(false);

  return (
    <div className="h-full w-full">
      <Title />
      <Header />
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setLogin(!login);
          }}
          className="flex items-center justify-center p-3 m-5 w-24 border-2 border-blue-700 hover:bg-blue-500 hover:text-white rounded-md">
          {login ? "Logout" : "Login"}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setAccessContact(!accessContact);
          }}
          className="flex items-center justify-center p-3 m-5 w-48 border-2 border-blue-700 hover:bg-blue-500 hover:text-white rounded-md">
          {accessContact ? "Remove Access" : "Grant Access"}
        </button>
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        {/* Below we have implemented a protected route in one way i.e. Contact. If the value of accessContact is true then user will be able to access Contact component else he will be redirected to Home page.*/}
        <Route path="/contact">
          <Contact accessContact={accessContact} />
        </Route>
        {/* Below we have implemented a protected route in another way i.e. Profile. If the value of login is true then user will be able to access Profile component else he will be redirected to Home page.*/}
        <Route path="/profile">
          {login ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/post/:name" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
