import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import {createUser} from '../util/auth';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
function SignupScreen() {
   const [isAuthenticating,setIsAuthenticating]=useState(false);
   const authCtx=useContext(AuthContext)
  async function signUpHandler({email, password}){
    setIsAuthenticating(true);
    try{
     const token =  await createUser(email, password);
      authCtx.authenticate(token)
    }catch(e){
      Alert.alert('Autnetication failed',"Could not signUp user.Try again later")
    }
   
   setIsAuthenticating(false);
  }
  if(isAuthenticating){
    return <LoadingOverlay/>
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
