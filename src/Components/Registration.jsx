import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { auth, db, storage } from "../config/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

function Registration() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [spinner, setSpinner] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const studentsCollectionRef = collection(db, "students");
  const handleSubmit = async () => {
    setSpinner(" ");
    console.log(firstName, lastName, email, password, confirmPassword);
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(studentsCollectionRef, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userId: auth?.currentUser?.uid,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("password not same");
    }
    setSpinner("");
  };
  return (
    <>
      {" "}
      {auth.currentUser ? (
        <>Happy enrollment to CCT</>
      ) : (
        <>
          <div className="pt-2 pb-3">
            <div className="form">
              <div className="form-body">
                <h1>Register</h1>
                <div className="username">
                  <label className="form__label" for="firstName">
                    First Name
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleInputChange}
                    // onChange={(e)=>setFirstName(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <label className="form__label" for="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="lastName"
                    className="form__input"
                    placeholder="LastName"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="email">
                  <label className="form__label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    required
                    onChange={handleInputChange}
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
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="footer">
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
                  <Button onClick={handleSubmit}>Register</Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Registration;
