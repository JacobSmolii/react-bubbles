import React,{useState} from "react";
import axios from 'axios'
import {axiosWithAuth} from "../utils/axiosWithAuth";
import '../style.css'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const [credentials,setCredentials] = useState({
        username:'',
        password:''
    })
    const handleChange = (e) => {
            setCredentials({
                ...credentials,
                    [e.target.name]:e.target.value

            })

    }

    const login = (e) => {
        console.log(credentials)
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/login`,credentials)
            .then(res => {
                localStorage.setItem('token',JSON.stringify(res.data.payload))
                props.history.push('/protected')
            })
            .catch(err => {err ? alert("Try again") : alert("Success")})
    }
  return (
    <>
          <div className="forma_suka">
              <form className="login_form" onSubmit={login}>
                  <input
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      placeholder="login"
                  />
                  <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      placeholder={"password"}
                      onChange={handleChange}
                  />
                  <button className="button_log_in">Log in</button>
              </form>
          </div>
    </>
  );
};

export default Login;
