import axios from "axios";

const API_KEY = "AIzaSyDWx215j_XfAqRQJK3WOPY1nVbzv6lS-GQ";
 export async function authenticate(mode,email,password){
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
   await axios.post(url,{
        email: email,
        password:password,
        returnSecureToken: true
      });
      console.log(response.data);
}
export async function createUser(email, password) {
  await authenticate('signUp',email,password);
}

export async function login(email, password) {
    await authenticate('signInWithPassword',email,password);
}