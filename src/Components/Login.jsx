import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { auth } from "../config/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Spinner } from "react-bootstrap";

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
          <div class="sidebar mt-0">
            <h4 style={{ padding: "16px" }}>Admin Dashboard</h4>
            <Nav.Link>
              <Link
                to="/addmin-dashboard"
                className="link"
                style={{ paddingLeft: "20px" }}
              >
                Student List
              </Link>
            </Nav.Link>
            <br />
            <Nav.Link>
              <Link
                to="/add-student"
                className="link active"
                style={{ paddingLeft: "20px" }}
              >
                Add Student
              </Link>
            </Nav.Link>
            <br />
            <Nav.Link>
              <Link
                to="/edit-student"
                className="link"
                style={{ paddingLeft: "20px" }}
              >
                Edit Student
              </Link>
            </Nav.Link>
            <br />
            <Nav.Link>
              <Link to="#" className="link" style={{ paddingLeft: "20px" }}>
                Delete Students
              </Link>
            </Nav.Link>
            <br />
            <Nav.Link>
              <Link
                to="/login"
                className="link"
                style={{ paddingLeft: "20px" }}
              >
                Logout
              </Link>
            </Nav.Link>
          </div>

          <div className="content">
            <table class="table mt-5">
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age </th>
                <th>Bithdate </th>
                <th>Year Level </th>
                <th>Course</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="pt-5 pb-5">
            <div className="form mt-5 mb-5">
              <div className="form-body">
                <h1>Please Login</h1>
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
