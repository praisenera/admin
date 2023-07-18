import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Button } from "react-bootstrap";

function EditStudent() {
  return (
    <>
      <div class="sidebar mt-0">
        <h4 style={{ padding: "16px" }}>Admin Dashboard</h4>
        <Nav.Link>
          <Link to="#" className="link" style={{ paddingLeft: "20px" }}>
            Student List
          </Link>
        </Nav.Link>
        <br />
        <Nav.Link>
          <Link
            to="/enrollmentform"
            className="link"
            style={{ paddingLeft: "20px" }}
          >
            Add Student
          </Link>
        </Nav.Link>
        <br />
        <Nav.Link>
          <Link
            to="/edit-student"
            className="link active"
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
          <Link to="/login" className="link" style={{ paddingLeft: "20px" }}>
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
            <th>Action</th>
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
              <td>
                <Button className="btn btn-success">Edit</Button>
                <Button className="btn btn-danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EditStudent;
