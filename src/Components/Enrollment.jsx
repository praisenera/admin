import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

function EnrollmentForm(props) {
  const students = props.students.filter((x) => !x.course);
  const now = new Date().toISOString().split("T")[0];

  const [selected, setSelected] = useState("");
  const [selectedstudent, setSelectedstudent] = useState({});
  const [bdate, setbdate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [yearlevel, setYearlevel] = useState("");
  const [homead, setHomeAd] = useState("");
  const [mobilenum, setMobileNum] = useState("");
  const [tel, setTelNum] = useState("");
  const [course, setCourse] = useState("");

  const [spin, setSpin] = useState("");

  const select = (event) => {
    setSelected(event.target.value);
    setSelectedstudent(
      students.find((student) => student.email == event.target.value)
    );
    console.log(selectedstudent);
  };

  const submitx = async (e) => {
    e.preventDefault();
    setSpin(" ");
    console.log("updating doc");
    const xDoc = doc(db, "students", selectedstudent.id);
    try {
      await updateDoc(xDoc, {
        bdate: bdate,
        age: age,
        gender: gender,
        yearlevel: yearlevel,
        homead: homead,
        mobilenum: mobilenum,
        tel: tel,
        course: course,
      });
      await props.getstudents();
      // setCount(count + 1);
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  return (
    <>
      <Sidebar />
      <div className="content">
        {/* {bdate}
        {gender}
        {yearlevel}
        {homead}
        {mobilenum}
        {tel}
        {course}
        {selectedstudent.id} */}
        <h1>Student Enrollment Form</h1>
        <h2>Select a student</h2>
        <Form.Select aria-label="Default select example" onChange={select}>
          <option selected disabled>
            none
          </option>
          {students.map((student) => (
            <option value={student.email} key={student.email}>
              {student.email}
            </option>
          ))}
        </Form.Select>
        <Form>
          {" "}
          <div className="form_body">
            <h3>
              Student Information: {selectedstudent.lastName}
              {", "}
              {selectedstudent?.firstName}
            </h3>
            <label>First Name</label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={selectedstudent.firstName}
              disabled
            />
            <label>Last Name</label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={selectedstudent.lastName}
              disabled
            />
            <br />
            <label>Birhtdate: </label>
            <input
              type="date"
              id="birthdate"
              max={now}
              value={bdate}
              onChange={(date) => setbdate(date.target.value)}
            />
            <label>Age: </label>
            <input
              type="number"
              id="age"
              min="0"
              max="100"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Gender: </label>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Male</label>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Female</label>
            <input
              type="radio"
              value="other"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Other</label>
            <br />
            <label>Year Level</label>
            <input
              type="number"
              id="year_level"
              onChange={(e) => setYearlevel(e.target.value)}
            />
            <label>Address: </label>
            <input
              type="text"
              id="address"
              width="200px"
              onChange={(e) => setHomeAd(e.target.value)}
            />{" "}
            <br />
            <label>Mobile Number: </label>
            <input
              type="number"
              id="mobile_num"
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <label>Telephone Number: </label>
            <input
              type="number"
              id="mobile_num"
              onChange={(e) => setTelNum(e.target.value)}
            />{" "}
            <br />
            <label>Email Address: </label>
            <input
              type="email"
              id="email"
              width="100px"
              disabled={true}
              value={selected}
            />
            <label>Specified Course: </label>
            <select
              className="course"
              style={{ width: "200px", marginLeft: "20px" }}
              onChange={(e) => setCourse(e.target.value)}
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
              <option value="BSEDUC">Bachelor of Elementary Education</option>
              <option value="BSEDUC">Bachelor of Secondary Education</option>
            </select>
            <br />
          </div>
          <div className="text-center">
            {spin ? (
              <></>
            ) : (
              <button
                onClick={submitx}
                className="btn btn-success"
                style={{ marginBottom: "30px", marginTop: "50px" }}
              >
                Save
              </button>
            )}
          </div>
        </Form>
      </div>
    </>
  );
}
export default EnrollmentForm;
