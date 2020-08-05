import React from 'react';
import {HomePage} from "./components/pages/homepage/homepage.component"
import "./App.css"
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./components/pages/shop/shop.component.jsx"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from "../src/firebase/firebase.utils"

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser : user});
      console.log(user)
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){

    return(
      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        </div>
        ) 
      
  }
  }

export default App;
