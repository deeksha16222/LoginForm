import "./styles.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
export default function App() {
  let [user, setUser] = useState({ name: "", email: "" });
  let [error, setError] = useState("");

  const adminUser = {
    email: "deekshabisht@gmail.com",
    password: "12345678"
  };
  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="Welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
