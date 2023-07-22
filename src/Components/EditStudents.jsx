import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Sidebar from "./Sidebar";

function EditStudent(props) {
  const [students, setStudents] = useState();

  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});

  const handleEdit = (student) => {
    setEditMode(true);
    setEditedStudent(student);
  };

  const handleSave = () => {
    setEditMode(false);
    const index = students.findIndex(
      (student) => student.id === editedStudent.id
    );

    const updatedStudents = [...students];
    updatedStudents[index] = editedStudent;
    setStudents(updatedStudents);
    setEditedStudent({});
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedStudent({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Sidebar />
      <div className="content text-center" style={{ marginLeft: "300px" }}>
        <Form style={{ width: "500px" }}>
          <h1 className="pt-5 ps-4">Edit Student Information</h1>

          <label>Name: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="text"
              name="name"
              value={editedStudent.name}
              onChange={handleChange}
            />
          ) : (
            students.name
          )}
          <br />
          <label>Age: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="text"
              name="age"
              value={editedStudent.age}
              onChange={handleChange}
            />
          ) : (
            students.age
          )}
          <br />
          <label>Year Level: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="number"
              name="year_level"
              value={editedStudent.year_level}
              onChange={handleChange}
            />
          ) : (
            students.year_level
          )}
          <br />
          <label>Course: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="text"
              name="course"
              value={editedStudent.course}
              onChange={handleChange}
            />
          ) : (
            students.course
          )}
          <br />
          <label>Address: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="text"
              name="address"
              value={editedStudent.address}
              onChange={handleChange}
            />
          ) : (
            students.address
          )}
          <br />
          <label>Mobile Number: </label>
          {editMode && editedStudent.id === students.id ? (
            <input
              type="text"
              name="mobile_num"
              value={editedStudent.mobile_num}
              onChange={handleChange}
            />
          ) : (
            students.mobile_num
          )}
          <br />

          <Button
            variant="success"
            className="me-3 text-align-items-center"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button variant="warning" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditStudent;
