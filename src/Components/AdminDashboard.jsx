import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/style.css";
import Sidebar from "./Sidebar";
import { auth } from "../config/firebaseconfig";

function AdminDashboard(props) {
  const students = props.students.filter((x) => x.course);
  return (
    <>
      <Sidebar />
      <div className="content">
        <h2>Enrolled Students</h2>
        <table class="table mt-5">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Bithdate</th>
            <th>Year Level</th>
            <th>Course</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.id}</td>
                <td>
                  {student.lastName}
                  {", "}
                  {student.firstName}
                </td>
                <td>{student.gender}</td>
                <td>{student.bdate}</td>
                <td>{student.yearlevel}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
                <td>{student.homead}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminDashboard;
