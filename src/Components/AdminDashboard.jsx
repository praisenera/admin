import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../css/style.css";
import Sidebar from "./Sidebar";
import { auth } from "../config/firebaseconfig";

function AdminDashboard(props) {
  const students = props?.students?.filter((x) => x.course);

  // const [editMode, setEditMode] = useState(false);
  // const [editedStudent, setEditedStudent] = useState({});

  // const handleEdit = (student) => {
  //   setEditMode(true);
  //   setEditedStudent(student);
  // };

  return (
    <>
      <Sidebar students={students} />
      <div className="content mt-5">
        <h2 className="mt-5">Approved Students</h2>
        <table class="table">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Bithdate</th>
            <th>Year Level</th>
            <th>Course</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          <tbody >
            {students
              ?.filter((student) => student.status == "Approved")
              .map((student) => (
                <tr style={{ fontSize: "13px" }}>
                  <td>{student.id}</td>
                  <td>
                    {student.lastName}
                    {", "}
                    {student.firstName}
                  </td>
                  <td>{student.gender}</td>
                  <td>{student.birthdate}</td>
                  <td>{student.yearLevel}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                  <td>
                    <Link
                      to={`/student/${student.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <Button
                        className="mb-2"
                        style={{ width: "100px", fontSize: "11px" }}
                      >
                        View Student
                      </Button>
                    </Link>
                    <Link
                      to={`/edit/${student.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <Button
                        variant="warning"
                        style={{ width: "100px", fontSize: "12px" }}
                      >
                        edit Student
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminDashboard;
