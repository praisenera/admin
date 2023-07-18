import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function EnrollmentForm() {
  return (
    <>
      <div class="sidebar mt-0">
        <h4 style={{ padding: "16px" }}>Admin Dashboard</h4>
        <Nav.Link>
          <Link
            to="/admindashboard"
            className="link"
            style={{ paddingLeft: "20px" }}
          >
            Student List
          </Link>
        </Nav.Link>
        <br />
        <Nav.Link>
          <Link
            to="/enrollmentform"
            className="link"
            style={{
              paddingLeft: "20px",
            }}
          >
            Add Student
          </Link>
        </Nav.Link>
        <br />
        <Nav.Link>
          <Link to="#" className="link" style={{ paddingLeft: "20px" }}>
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
          <Link to="/login" className="link" style={{ paddingLeft: "20px" }}>
            Logout
          </Link>
        </Nav.Link>
      </div>
      <div className="content">
        <h1>Student Enrollment Form</h1>
        <form>
          <div className="form_body">
            <h3>Student Information</h3>
            <label>First Name</label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            <label>Last Name</label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
            <label>Middle Name</label>
            <input
              className="form__input"
              type="text"
              id="middleName"
              placeholder="Middle Name"
            />
            <br />
            <label>Birhtdate: </label>
            <input type="date" id="birthdate" />
            <label>Age: </label>
            <input type="number" id="age" min="0" style={{ width: "50px" }} />
            <label>Gender: </label>
            <input type="radio" id="male" />
            <label>Male</label>
            <input type="radio" id="female" />
            <label>Female</label>
            <input type="radio" id="other" />
            <label>Other</label>
            <br />
            <label>Religion: </label>
            <input type="text" id="religion" />
            <label>Year Level</label>
            <input type="number" id="year_level" />
            <label>Address: </label>
            <input type="text" id="address" width="200px" /> <br />
            <label>Mobile Number: </label>
            <input type="number" id="mobile_num" />
            <label>Telephone Number: </label>
            <input type="number" id="mobile_num" /> <br />
            <label>Email Address: </label>
            <input type="email" id="email" width="100px" />
            <label>Specified Course: </label>
            <select
              className="course"
              style={{ width: "200px", marginLeft: "20px" }}
            >
              <option value="">Select ..</option>
              <option value="">BS in Business Administration </option>
              <option value="">BS in Accountancy </option>
              <option value="">BS in Management Accounting </option>
              <option value="">
                BS in Human Resource Development Management
              </option>
              <option value="Tourism">BS in Tourism </option>
              <option value="BSIT">BS in Information Technology</option>
              <option value="BSCE">BS in Civil Engineering</option>
              <option value="">BS in Computer Engineering</option>
              <option value="BSEE">BS in Electrical Engineering</option>
              <option value="BSME">BS in Mechanical Engineering</option>
              <option value="BSCRIM">BS in Criminology</option>
              <option value="BSEDUC">Bachelor of Elementary Education</option>
              <option value="BSEDUC">Bachelor of Secondary Education</option>
            </select>
            <br />
            {/* <h3>Parent's Information</h3>
            <label>Mother's First Name</label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            <label>Last Name</label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
            <label>Middle Name</label>
            <input
              className="form__input"
              type="text"
              id="middleName"
              placeholder="Middle Name"
            />
            <label>Father's First Name</label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            <label>Last Name</label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
            <label>Middle Name</label>
            <input
              className="form__input"
              type="text"
              id="middleName"
              placeholder="Middle Name"
            />
            <label>Guardians Name: </label>
            <input
              className="form__input"
              type="text"
              id="middleName"
              placeholder="Name"
            />
            <label>Contact Number: </label>
            <input type="number" id="contact_num" />
          </div> */}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginBottom: "30px", marginTop: "50px" }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EnrollmentForm;
