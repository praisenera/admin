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
        <Container style={{ marginLeft: "250px", paddingTop: "100px" }}>
          <Row>
            <h3>Student Profile:{student.id}</h3>
            <h5 className="pt-3">
              Status:{" "}
              {student.status ? student.status : "Waiting for approval...."}
            </h5>
          </Row>
          <Row className="pt-4 ps-5">
            <div className="col-lg-6">
              <h4>
                {student.lastName}, {student.firstName}
              </h4>

              <tr>
                <td className="pt-3 pb-3">
                  Birthdate: <span className="ms-2">{student.birthdate}</span>
                </td>
              </tr>
              <tr>
                <td className="pb-3">
                  Address: <span className="ms-2 ">{student.address}</span>
                </td>
              </tr>
              <tr>
                <td className="pb-3">
                  Email: <span className="ms-2">{student.email}</span>
                </td>
              </tr>
              <tr>
                <td className="pb-3">
                  Course: <span className="ms-2">{student.course}</span>
                </td>
              </tr>
              <tr>
                <td className="pb-3">
                  Year Level: <span className="ms-2">{student.yearLevel}</span>
                </td>
              </tr>
              <tr className="pb-3">
                <td>Contact Number: {student.mobileNum}</td>
              </tr>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default StudentViewerEditor;
