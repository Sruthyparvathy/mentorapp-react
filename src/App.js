import React, {Component} from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import WishCreation from './Components/InsertWish';
import WishRetrieval from './Components/SendWish';
class App extends Component{
  render(){
    return(
      // <Router history={browserHistory}>   
      //       <Redirect from="/" to="/Login" />
      //       <Route> 
      //   <Route exact path="/" component={Login}/>
      //   <Route exact path="/Login" component={Login} />
      //   <Route exact path="/Home" component={Home} />
      //   </Route>
      // </Router>
      <div>
       <Home/>
      <WishCreation/>
      <WishRetrieval/>  </div>
    );
  }
}

export default App;
