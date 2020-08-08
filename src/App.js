import React from 'react';
import {HomePage} from "./components/pages/homepage/homepage.component"
import "./App.css"
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./components/pages/shop/shop.component.jsx"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils"

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{

if (userAuth){
  const userRef = await createUserProfileDocument(userAuth)
  userRef.onSnapshot(snapShot =>{
    this.setState({
      currentUser: {
        id: snapShot,
        ...snapShot.data()
      }
    })

console.log(this.state)
  })
}
this.setState({currentUser: userAuth})
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
    return(
      <div>
      <Header currentUser={this.state.currentUser}/>
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
