import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

function EditStudent() {
  return (
    <>
      <Sidebar></Sidebar>

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
