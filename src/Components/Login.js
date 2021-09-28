import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./Login.css";
import { useProvider } from "../Provider/Provider";
import { actionTypes } from "../Provider/reducer";

function Login() {
  const [state, dispatch] = useProvider();
  const signIn = (e) => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    }).catch(error => {
      alert(error.message)
    })
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-6gwiyo/v/2925175?expiry=1633445333&fit=bounds&height=800&sig=NDhmMjg3ZjU0Zjc2NTdhNDk4MGUzMzZiMmY0ZGYyNjI4NWJlZGFhYw%3D%3D&width=1100"
          alt=""
        />
        <h1>Sign in to Nikstarrss HQ</h1>
        <p>nikstarr.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
