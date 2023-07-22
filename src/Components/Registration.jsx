import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { auth, db, storage } from "../config/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function StudentViewerEditor(props) {
  const { id } = useParams();
  const students = props.students;
  const student = props.students.find((rec) => rec.id == id);

  return (
    <>
      <Sidebar students={students} />
      <div className="col-lg-9">
        <div className="row-logo pt-3">
          <img
            src={require("../img/logo.jpg")}
            alt="logo"
            style={{ width: "80px", marginLeft: "1200px" }}
          />
        </div>
        <Container style={{ marginLeft: "250px", paddingTop: "50px" }}>
          <Row>
            <h1>Student Profile:{student.id}</h1>
            <h5 className="pt-3">
              Status:
              {student.status ? student.status : "Waiting for approval...."}
            </h5>
          </Row>
          <Row className="pt-4 ps-5">
            <div className="col-lg-6">
              <h3>
                Name of Student: {student.lastName}, {student.firstName}
              </h3>
              <p className="pt-3">Birthdate:{student.birthdate} </p>
              <p>Address: </p>
              <p>Email: </p>
              <p>Course:</p>
              <p>Year Level: </p>
              <p>Contact Number:</p>
            </div>
            <div className="col-lg-6 pt-4">
              <p className="pt-3">Section: N/A </p>
              <p>Adviser: N/A</p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default StudentViewerEditor;
