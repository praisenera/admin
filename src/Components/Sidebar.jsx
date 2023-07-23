import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Badge } from "react-bootstrap";
function Sidebar(props) {
  return (
    <>
      <div class="sidebar" style={{ marginTop: "90px" }}>
        <h5 style={{ padding: "16px" }}>
          <b>Admin Dashboard</b>
        </h5>
        <Nav.Link>
          <Link
            to="/admin-dashboard"
            style={{
              paddingLeft: "20px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Student List
          </Link>
        </Nav.Link>
        <br />
        <Nav.Link>
          <Link
            to="/student-approval"
            style={{
              paddingLeft: "20px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Student Approval
            <Badge>
              {
                props.students?.filter(
                  (student) =>
                    student.status != "Approved" && student.status != "Denied"
                ).length
              }
            </Badge>
          </Link>
        </Nav.Link>
        <br />
        {/* <Nav.Link>
          <Link
            to="#"
            style={{
              paddingLeft: "20px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Delete Students
          </Link>
        </Nav.Link>
        <br /> */}
      </div>
    </>
  );
}

export default Sidebar;
