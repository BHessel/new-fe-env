import React, { useState } from "react";
import axios from "axios";

const Login = ({ handleSuccessfulAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginErrors, setLogginErrors] = useState('')

  const handleEmail = (e) => {
    // console.log(e)
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form submitted");

    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentails: true }
      )
      .then((response) => {
        console.log("res from login", response);
        // console.log("res from login.status", response.status);
        // console.log("res from login.data", response.data);

        if (response.data.logged_in === true) {
            handleSuccessfulAuth(response.data)
        }
      })
      .catch((error) => {
        console.log("login errors", error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
