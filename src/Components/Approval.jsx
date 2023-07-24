import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../css/style.css";
import Sidebar from "./Sidebar";
import { auth, db } from "../config/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";

function ApproveStudents(props) {
  const [spin, setSpin] = useState("");
  const students = props?.students?.filter((x) => x.course);

  const updateStatusApprove = async (event) => {
    setSpin(" ");
    const xDoc = doc(db, "students", event.target.value);
    try {
      await updateDoc(xDoc, { status: "Approved" });
      await props.getstudents();
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  const updateStatusDenied = async (event) => {
    setSpin(" ");
    const xDoc = doc(db, "students", event.target.value);
    try {
      await updateDoc(xDoc, { status: "Denied" });
      await props.getstudents();
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  const updateStatusReview = async (event) => {
    setSpin(" ");
    const xDoc = doc(db, "students", event.target.value);
    try {
      await updateDoc(xDoc, { status: "Under Review" });
      await props.getstudents();
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  return (
    <>
      <Sidebar students={students} />
      <div className="content mt-5">
        <h2 className="mt-5">Students pending approval</h2>
        <table className="table col-lg-12 mt-3 text-center">
          <tr className="text-center">
            <th>Student ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Bithdate</th>
            <th>Year Level</th>
            <th>Course</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          <tbody>
            {students
              ?.filter(
                (student) =>
                  student.status != "Approved" && student.status != "Denied"
              )
              .map((student) => (
                <tr>
                  <td>
                    {" "}
                    <Link
                      to="/add-student"
                      style={{
                        paddingLeft: "20px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {student.id}
                    </Link>
                  </td>
                  <td style={{ width: "150px" }}>
                    {student.lastName}
                    {", "}
                    {student.firstName}
                  </td>
                  <td>{student.gender}</td>
                  <td style={{ width: "150px" }}>{student.birthdate}</td>
                  <td style={{ width: "100px" }}>{student.yearLevel}</td>
                  <td style={{ width: "100px" }}>{student.course}</td>
                  <td>{student.email}</td>
                  <td>
                    {spin ? (
                      <></>
                    ) : (
                      <>
                        <Link
                          to={`/student/${student.id}`}
                          style={{
                            paddingLeft: "20px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          <Button
                            style={{
                              width: "100px",
                              fontSize: "11px",
                            }}
                            className="mb-2"
                          >
                            View Student
                          </Button>
                        </Link>
                        <Button
                          variant="success"
                          className="mb-2"
                          style={{
                            width: "100px",
                            fontSize: "11px",
                            marginLeft: "18px",
                          }}
                          value={student.id}
                          onClick={updateStatusApprove}
                        >
                          Approve
                        </Button>
                        <Button
                          style={{
                            width: "100px",
                            fontSize: "11px",
                            marginLeft: "18px",
                          }}
                          variant="danger"
                          value={student.id}
                          onClick={updateStatusDenied}
                        >
                          Deny
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <h2 className="mt-5">Students Denied</h2>
        <table className="table mt-3 text-center">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Bithdate</th>
            <th>Year Level</th>
            <th>Course</th>
            <th>Email</th>

            <th>Action</th>
          </tr>
          <tbody>
            {students
              ?.filter((student) => student.status == "Denied")
              .map((student) => (
                <tr>
                  <td>{student.id}</td>
                  <td style={{ width: "150px" }}>
                    {student.lastName}
                    {", "}
                    {student.firstName}
                  </td>
                  <td>{student.gender}</td>
                  <td style={{ width: "150px" }}>{student.birthdate}</td>
                  <td style={{ width: "100px" }}>{student.yearLevel}</td>
                  <td style={{ width: "100px" }}>{student.course}</td>
                  <td>{student.email}</td>
                  <td>
                    {spin ? (
                      <></>
                    ) : (
                      <>
                        <Link
                          to={`/student/${student.id}`}
                          style={{
                            paddingLeft: "20px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          <Button
                            className="mb-2"
                            style={{
                              width: "100px",
                              fontSize: "11px",
                            }}
                          >
                            View Student
                          </Button>
                        </Link>
                        <Button
                          variant="warning"
                          style={{
                            width: "100px",
                            fontSize: "11px",
                            marginLeft: "18px",
                          }}
                          value={student.id}
                          onClick={updateStatusReview}
                        >
                          Review
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApproveStudents;
