import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Badge } from "react-bootstrap";
function Sidebar(props) {
  return (
    <>
      <div class="sidebar mt-0">
        <h4 style={{ padding: "16px" }}>Admin Dashboard</h4>
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
            to="/add-student"
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
