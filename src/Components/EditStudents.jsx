import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

function EditStudent(props) {
  const { id } = useParams();
  const students = props.students;
  const student = props.students.find((rec) => rec.id == id);
  const [spin, setSpin] = useState(0);

  const [fname, setFname] = useState(student.firstName);
  const [lname, setLname] = useState(student.lastName);
  const [date, setDate] = useState(student.birthdate);
  const [mother_name, setMotherName] = useState("");
  const [con_mom, setConMother] = useState("");
  const [father_name, setFatherName] = useState("");
  const [con_pops, setConFather] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [con_guard, setConGuard] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpin(" ");
    const xDoc = doc(db, "students", id);
    try {
      await updateDoc(xDoc, {
        firstName: fname,
        lastName: lname,
        birthdate: date,
      });
      await props.getstudents();
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  return (
    <>
      <Row className="mt-5">
        <Col lg={2}>
          <Sidebar students={students} />
        </Col>
        <Col className="mt-5">
          <Form className="mt-5">
            <Row>
              <Col>
                <div className="first_name">
                  <label>First Name: </label>
                  <input
                    className="form__input"
                    type="text"
                    id="firstName"
                    placeholder={student.firstName}
                    style={{ marginLeft: "100px" }}
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                  />
                </div>
                <div className="last_name">
                  <label>Last Name:</label>
                  <input
                    className="form__input"
                    type="text"
                    id="lastName"
                    style={{ marginLeft: "100px" }}
                    placeholder={student.lastName}
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                  />
                </div>
                <div className="birthdate">
                  <label>Birhtdate: </label>
                  <input
                    type="date"
                    id="birthdate"
                    style={{ marginLeft: "113px", width: "205px" }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="gender">
                  <label>Gender: </label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    style={{ marginLeft: "130px" }}
                    placeholder={student.gender}
                    checked={student.gender == "male"}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    value={student.gender}
                    id="gender"
                    name="gender"
                    checked={student.gender == "female"}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    value={student.gender}
                    id="gender"
                    name="gender"
                    checked={student.gender == "other"}
                  />
                  <label>Other</label>
                </div>
                <div className="year_level">
                  <label>Year Level:</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    id="yearLevel"
                    style={{ marginLeft: "105px" }}
                    value={student.yearLevel}
                  />
                </div>
                <div className="address">
                  <label>Address: </label>
                  <input
                    type="text"
                    id="address"
                    width="200px"
                    placeholder="ex. Sitio Malitlit San Miguel Sto.Tomas"
                    style={{ marginLeft: "120px" }}
                    value={student.address}
                  />
                </div>
                <div className="mobile_num">
                  <label>Mobile Number: </label>
                  <input
                    type="number"
                    id="mobileNum"
                    placeholder="ex.09123456789"
                    style={{ marginLeft: "63px" }}
                    value={student.mobileNum}
                  />
                </div>
                <div className="tel_num">
                  <label>Telephone Number: </label>
                  <input
                    type="number"
                    id="telNum"
                    placeholder="ex.(02)-12345674"
                    style={{ marginLeft: "32px" }}
                    value={student.telNum}
                  />
                </div>
                <div className="email">
                  <label>Email Address: </label>
                  <input
                    type="email"
                    id="email"
                    width="100px"
                    placeholder="ex. juan@gmail.com"
                    style={{ marginLeft: "70px" }}
                    value={student.email}
                  />
                </div>
                <div className="course">
                  <label>Specified Course: </label>
                  <select
                    className="course"
                    id="course"
                    style={{ width: "200px", marginLeft: "50px" }}
                  >
                    <option value="">Select ..</option>
                    <option selected={student.course == "BSBA"}>
                      BS in Business Administration{" "}
                    </option>
                    <option selected={student.course == "BSA"}>
                      BS in Accountancy{" "}
                    </option>
                    <option selected={student.course == "BSMA"}>
                      BS in Management Accounting{" "}
                    </option>
                    <option selected={student.course == "BSHRDM"}>
                      BS in Human Resource Development Management
                    </option>
                    <option selected={student.course == "Tourism"}>
                      BS in Tourism{" "}
                    </option>
                    <option selected={student.course == "BSIT"}>
                      BS in Information Technology
                    </option>
                    <option selected={student.course == "BSCE"}>
                      BS in Civil Engineering
                    </option>
                    <option selected={student.course == "BSCpE"}>
                      BS in Computer Engineering
                    </option>
                    <option selected={student.course == "BSEE"}>
                      BS in Electrical Engineering
                    </option>
                    <option selected={student.course == "BSME"}>
                      BS in Mechanical Engineering
                    </option>
                    <option selected={student.course == "BSCRIM"}>
                      BS in Criminology
                    </option>
                    <option selected={student.course == "BSEDUC"}>
                      Bachelor of Elementary Education
                    </option>
                    <option selected={student.course == "BSEDUC2"}>
                      Bachelor of Secondary Education
                    </option>
                  </select>
                </div>
              </Col>

              <Col>
                <h3>Parents Information</h3>
                <div className="mothers_name">
                  <label className="mother_name">Mothers Name: </label>
                  <input
                    type="text"
                    name="mother"
                    id="mother_name"
                    placeholder="Mothers Name"
                    style={{ marginLeft: "65px" }}
                    onChange={(e) => setMotherName(e.target.value)}
                  />
                </div>
                <div className="con_mom">
                  <label className="mother_name">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_mom"
                    id="con_mom"
                    placeholder="ex. 09123456789"
                    style={{ marginLeft: "47px" }}
                    onChange={(e) => setConMother(e.target.value)}
                  />
                </div>
                <div className="fathers_name">
                  <label className="father_name">Fathers Name: </label>
                  <input
                    type="text"
                    name="father"
                    id="father_name"
                    placeholder="Fathers Name"
                    style={{ marginLeft: "70px" }}
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="con_pop">
                  <label className="father_name">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_pop"
                    id="con_pops"
                    placeholder="09123456789"
                    style={{ marginLeft: "47px" }}
                    onChange={(e) => setConFather(e.target.value)}
                  />
                </div>
                <div className="guardian">
                  <label className="father_name">Guardins Name: </label>
                  <input
                    type="text"
                    name="guardian"
                    id="guardian_name"
                    placeholder="Guardians Name"
                    style={{ marginLeft: "55px" }}
                    onChange={(e) => setGuardianName(e.target.value)}
                  />
                </div>
                <div className="con_guard">
                  <label className="gurad_con">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_guard"
                    id="con_guard"
                    placeholder="09123456789"
                    style={{ marginLeft: "47px" }}
                    onChange={(e) => setConGuard(e.target.value)}
                  />
                </div>
              </Col>
            </Row>

            <div className="text-center">
              {spin ? (
                <></>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="btn btn-success"
                  style={{ marginBottom: "30px", marginTop: "50px" }}
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default EditStudent;
