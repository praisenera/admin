import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { auth, db, storage } from "../config/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

function Registration() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [year_level, setYearLevel] = useState(null);
  const [address, setAddress] = useState(null);
  const [mobile_num, setMobileNum] = useState(null);
  const [course, setCourse] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [spinner, setSpinner] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id == "firstName") {
      setFirstName(value);
    }
    if (id == "lastName") {
      setLastName(value);
    }
    if (id == "birthdate") {
      setBirthdate(value);
    }
    if (id == "gender") {
      setGender(value);
    }
    if (id == "year_level") {
      setYearLevel(value);
    }
    if (id == "address") {
      setAddress(value);
    }
    if (id == "mobile_num") {
      setMobileNum(value);
    }
    if (id == "course") {
      setCourse(value);
    }
    if (id == "email") {
      setEmail(value);
    }
    if (id == "password") {
      setPassword(value);
    }
    if (id == "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const studentsCollectionRef = collection(db, "students");
  const handleSubmit = async () => {
    setSpinner(" ");
    console.log(
      firstName,
      lastName,
      birthdate,
      gender,
      year_level,
      address,
      mobile_num,
      course,
      email,
      password,
      confirmPassword
    );
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(studentsCollectionRef, {
          firstName: firstName,
          lastName: lastName,
          birthdate: birthdate,
          gender: gender,
          year_level: year_level,
          address: address,
          mobile_num: mobile_num,
          course: course,
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
                    id="lastName"
                    className="form__input"
                    placeholder="LastName"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="birthdate">
                  <label>Birhtdate: </label>
                  <input
                    type="number"
                    id="birthdate"
                    className="form__input"
                    placeholder="Bithdate"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="gender">
                  <label>Gender: </label>
                  <input
                    type="radio"
                    className="form__input"
                    value="male"
                    name="gender"
                    onChange={handleInputChange}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    className="form__input"
                    value="female"
                    name="gender"
                    onChange={handleInputChange}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    className="form__input"
                    value="other"
                    name="gender"
                    onChange={handleInputChange}
                  />
                  <label>Other</label>
                  <br />
                </div>
                <div className="year_level">
                  <label>Year Level</label>
                  <input
                    type="number"
                    className="form__input"
                    id="year_level"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="address">
                  <label>Address: </label>
                  <input
                    type="text"
                    className="form__input"
                    id="address"
                    width="200px"
                    required
                    onChange={handleInputChange}
                  />{" "}
                  <br />
                </div>
                <div className="mobile_num">
                  <label>Mobile Number: </label>
                  <input
                    type="number"
                    className="form__input"
                    id="mobile_num"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tele_num">
                  <label>Telephone Number: </label>
                  <input
                    type="number"
                    className="form_input"
                    id="mobile_num"
                    required
                    onChange={handleInputChange}
                  />{" "}
                  <br />
                </div>
                <div className="course">
                  <label>Specified Course: </label>
                  <select
                    className="course"
                    style={{ width: "200px", marginLeft: "20px" }}
                    required
                    onChange={handleInputChange}
                  >
                    <option value="">Select ..</option>
                    <option value="BSBA">BS in Business Administration </option>
                    <option value="BSA">BS in Accountancy </option>
                    <option value="BSMA">BS in Management Accounting </option>
                    <option value="BSHRDM">
                      BS in Human Resource Development Management
                    </option>
                    <option value="Tourism">BS in Tourism </option>
                    <option value="BSIT">BS in Information Technology</option>
                    <option value="BSCE">BS in Civil Engineering</option>
                    <option value="BSCpE">BS in Computer Engineering</option>
                    <option value="BSEE">BS in Electrical Engineering</option>
                    <option value="BSME">BS in Mechanical Engineering</option>
                    <option value="BSCRIM">BS in Criminology</option>
                    <option value="BSEDUC">
                      Bachelor of Elementary Education
                    </option>
                    <option value="BSEDUC">
                      Bachelor of Secondary Education
                    </option>
                  </select>
                  <br />
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
