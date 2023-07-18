import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { auth } from "../config/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Spinner } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [spinner, setSpinner] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    setSpinner(" ");
    try {
      if (email != "admin@cct-admin.ph") {
        await signInWithEmailAndPassword(auth, email, password + " ");
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    setSpinner("");
  };
  // const createAccount = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <>
      {auth.currentUser ? (
        <>
          <AdminDashboard />
        </>
      ) : (
        <>
          <div className="pt-5 pb-5">
            <div className="form mt-5 mb-5">
              <div className="form-body">
                <h1>LOGIN ADMIN ACCOUNT</h1>
                <div className="email">
                  <label className="form__label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="password">
                  <label className="form__label" for="password">
                    Password
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {spinner ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <Button onClick={handleSubmit}>Login</Button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Login;
