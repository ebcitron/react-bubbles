import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return ( <Route  {...rest} render={props => {
       if(localStorage.getItem("token")){
      return <Component {...props} />;
       } else {
         return  <Redirect to ="/login" />;
      }
    }} />
    )}
    
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
       <PrivateRoute path="/api/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
