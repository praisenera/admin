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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Sidebar />
      <div className="content">
        <h2>Enrolled Students</h2>
        <table class="table mt-5 text-center">
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
          <tbody>
            {students?.map((student) => (
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
                <td>
                  <Link to="#">
                    <i
                      className="bi bi-trash-fill pe-2"
                      variant="danger"
                      onClick={handleShow}
                    ></i>
                  </Link>
                  <Link to="/edit-student">
                    <i
                      className="bi bi-pencil-fill"
                      variant="primary"
                      // onClick={handleEdit}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this student information?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Yes
              </Button>
              <Button variant="warning" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
        </table>
      </div>
    </>
  );
}

export default AdminDashboard;
