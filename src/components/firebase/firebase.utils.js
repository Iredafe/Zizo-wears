import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config= {
    apiKey: "AIzaSyD-ZV7BKIcNyxuheiH1FLqNhm63kVwE8vA",
    authDomain: "zizo-wears-db.firebaseapp.com",
    databaseURL: "https://zizo-wears-db.firebaseio.com",
    projectId: "zizo-wears-db",
    storageBucket: "zizo-wears-db.appspot.com",
    messagingSenderId: "587996145858",
    appId: "1:587996145858:web:05af5e1ed847962015335b",
    measurementId: "G-9BNX0N4BPS"
  };

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const{displayName, email} =userAuth;
    const createdAt = new Date();

try{
  await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
  })

}catch(error){
console.log('error creating user', error.message)

}
  } 
return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);


  export default firebase;