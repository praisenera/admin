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
  const [gen, setGen] = useState(student.gender);
  const [yLevel, setYLevel] = useState(student.yearLevel);
  const [add, setAdd] = useState(student.address);
  const [mNum, setMNum] = useState(student.mobileNum);
  const [tNum, setTNum] = useState(student.telNum);
  const [e_mail, setE_mail] = useState(student.email);
  const [courses, setCourses] = useState(student.course);
  const [mName, setMName] = useState(student.mother_name);
  const [con_mom, setConMother] = useState(student.con_mom);
  const [fName, setFName] = useState(student.father_name);
  const [con_pops, setConFather] = useState(student.con_pops);
  const [gName, setGName] = useState(student.guradian_name);
  const [con_guardian, setConGuard] = useState(student.con_guard);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpin(" ");
    const xDoc = doc(db, "students", id);
    try {
      await updateDoc(xDoc, {
        firstName: fname,
        lastName: lname,
        birthdate: date,
        gender: gen,
        yearLevel: yLevel,
        address: add,
        mobileNum: mNum,
        telNum: tNum,
        email: e_mail,
        course: courses,
        mother_name: mName,
        con_mom: con_mom,
        father_name: fName,
        con_pops: con_pops,
        guardian_name: gName,
        con_guard: con_guardian,
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
              <h2 className="pt-3 ps-3">Student Information</h2>
              <Col className="col-lg-6">
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
                    value={gen}
                    checked={gen == "male"}
                    onClick={(e) => setGen(e.target.value)}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    value={gen}
                    id="gender"
                    name="gender"
                    checked={gen == "female"}
                    onClick={(e) => setGen(e.target.value)}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    value={gen}
                    id="gender"
                    name="gender"
                    checked={gen == "other"}
                    onClick={(e) => setGen(e.target.value)}
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
                    placeholder={student.yearLevel}
                    value={yLevel}
                    onChange={(e) => setYLevel(e.target.value)}
                  />
                </div>

                <div className="address">
                  <label>Address: </label>
                  <input
                    type="text"
                    id="address"
                    width="200px"
                    placeholder={student.address}
                    style={{ marginLeft: "120px" }}
                    value={add}
                    onChange={(e) => setAdd(e.target.value)}
                  />
                </div>
                <div className="mobile_num">
                  <label>Mobile Number: </label>
                  <input
                    type="number"
                    id="mobileNum"
                    placeholder={student.mobileNum}
                    style={{ marginLeft: "63px" }}
                    value={mNum}
                    onChange={(e) => setMNum(e.target.value)}
                  />
                </div>
                <div className="tel_num">
                  <label>Telephone Number: </label>
                  <input
                    type="number"
                    id="telNum"
                    placeholder={student.telNum}
                    style={{ marginLeft: "32px" }}
                    value={tNum}
                    onChange={(e) => setTNum(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label>Email Address: </label>
                  <input
                    type="email"
                    id="email"
                    width="100px"
                    placeholder={student.email}
                    style={{ marginLeft: "70px" }}
                    value={e_mail}
                  />
                </div>
                <div className="course">
                  <label>Specified Course: </label>
                  <select
                    className="course"
                    id="course"
                    value={courses}
                    style={{ width: "200px", marginLeft: "50px" }}
                    placeholder={student.course}
                    onChange={(e) => setCourses(e.target.value)}
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

              <Col className="col-lg-6">
                <h3>Parents Information</h3>
                <div className="mothers_name">
                  <label className="mother_name">Mothers Name: </label>
                  <input
                    type="text"
                    name="mother"
                    id="mother_name"
                    placeholder={student.mother_name}
                    style={{ marginLeft: "65px" }}
                    value={mName}
                    onChange={(e) => setMName(e.target.value)}
                  />
                </div>
                <div className="con_mom">
                  <label className="mother_name">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_mom"
                    id="con_mom"
                    placeholder={student.con_mom}
                    style={{ marginLeft: "47px" }}
                    value={con_mom}
                    onChange={(e) => setConMother(e.target.value)}
                  />
                </div>
                <div className="fathers_name">
                  <label className="father_name">Fathers Name: </label>
                  <input
                    type="text"
                    name="father"
                    id="father_name"
                    placeholder={student.father_name}
                    style={{ marginLeft: "70px" }}
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
                <div className="con_pop">
                  <label className="father_name">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_pop"
                    id="con_pops"
                    placeholder={student.con_pops}
                    style={{ marginLeft: "47px" }}
                    value={con_pops}
                    onChange={(e) => setConFather(e.target.value)}
                  />
                </div>
                <div className="guardian">
                  <label className="father_name">Guardians Name: </label>
                  <input
                    type="text"
                    name="guardian"
                    id="guardian_name"
                    style={{ marginLeft: "45px" }}
                    placeholder={student.guardian_name}
                    value={gName}
                    onChange={(e) => setGName(e.target.value)}
                  />
                </div>
                <div className="con_guard">
                  <label className="gurad_con">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_guard"
                    id="con_guard"
                    placeholder={student.con_guard}
                    style={{ marginLeft: "47px" }}
                    value={con_guardian}
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
