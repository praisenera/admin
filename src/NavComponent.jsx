// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { auth } from "./config/firebaseconfig";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Row } from "react-bootstrap";

function OffcanvasExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  const logout = async () => {
    try {
      await signOut(auth);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Row>
      <>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3 fixed-top"
            style={{ background: "white" }}
          >
            <Container fluid>
              <Navbar.Brand>
                <img
                  src={require("./img/logo.jpg")}
                  alt="logo"
                  style={{ width: "60px" }}
                />
                Christian College of Tanauan
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {auth.currentUser ? (
                      <>
                        <Nav.Link>
                          <Link
                            to="/admin-dashboard"
                            className="link"
                            style={{
                              paddingLeft: "20px",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Dashboard
                          </Link>
                        </Nav.Link>

                        <Nav.Link>
                          <Link
                            to="/logout"
                            className="link"
                            onClick={logout}
                            style={{
                              paddingLeft: "20px",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Logout
                          </Link>
                        </Nav.Link>
                      </>
                    ) : (
                      <>
                        <Nav.Link>
                          <Link
                            className="link"
                            to="/"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Login
                          </Link>
                        </Nav.Link>
                      </>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </Row>
  );
}

export default OffcanvasExample;
