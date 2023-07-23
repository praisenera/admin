import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../css/style.css";
import Sidebar from "./Sidebar";
import { auth } from "../config/firebaseconfig";
import { Accordion, Card, Pagination } from "react-bootstrap";

function AdminDashboard(props) {
  const students = props?.students?.filter(
    (student) => student.status == "Approved"
  );

  const [pagination, setPagination] = useState(1);
  const paginationqty = 1;
  const [render, setRender] = useState(true);
  const [email, setEmail] = useState("");
  const [studlist, setStudlist] = useState(students);

  useEffect(() => {
    let x = students;
    setPagination(1);
    if (email) {
      x = x?.filter((a) => a.email.includes(email));
    }
    setStudlist(x);
  }, [render]);

  const functionCall = (event) => {
    setPagination(event.target.getAttribute("a-key"));
    topFunction();
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <Sidebar students={students} />
      <div className="content mt-5">
        <h2 className="mt-5">Approved Students</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>
              <label>Filter by email: </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder={""}
                style={{ marginLeft: "100px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setRender(!render);
                }}
                value={email}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Pagination>
          {(() => {
            let td = [];
            for (
              let i = 1;
              i <=
              Math.ceil(
                studlist?.filter((student) => student.status == "Approved")
                  .length / paginationqty
              );
              i++
            ) {
              td.push(
                <Pagination.Item
                  key={i}
                  a-key={i}
                  onClick={functionCall}
                  active={i == pagination}
                >
                  {i}
                </Pagination.Item>
              );
            }
            return td;
          })()}
        </Pagination>
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
          <tbody>
            {studlist
              ?.filter((student) => student.status == "Approved")
              .slice(
                (pagination - 1) * paginationqty,
                pagination * paginationqty
              )
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
