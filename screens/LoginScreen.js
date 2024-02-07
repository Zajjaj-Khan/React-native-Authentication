import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth'
import { Alert } from 'react-native';
function LoginScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)
  async function loginHandler({email, password}){
    setIsAuthenticating(true);
    try{
      await  login(email, password);
    }catch(err){
      Alert.alert('Authentication failed', 'Couldnt login you in')
      console.log(err)
    }
   
   setIsAuthenticating(false);
  }
  if(isAuthenticating){
    return <LoadingOverlay message='logging you in....'/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;;
}

  


export default LoginScreen;
