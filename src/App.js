import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AdminDashboard from "./Components/AdminDashboard";
import OffcanvasExample from "./NavComponent";
import EnrollmentForm from "./Components/Enrollment";
import EditStudent from "./Components/EditStudents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./config/firebaseconfig";
import { useEffect, useState } from "react";

function App() {
  const dbRefstd = collection(db, "students");
  const [students, setStudents] = useState([]);
  const getstudents = async () => {
    try {
      const data = await getDocs(dbRefstd);
      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((doc) => doc.userId != auth?.currentUser?.uid);
      setStudents(filteredData);
      console.log(filteredData);
    } catch (err) {
      if (auth.currentUser) {
        alert("cannot connect to firebase servers");
      }
      setStudents([]);
      console.error(err);
    }
  };

  useEffect(() => {
    getstudents();
  }, []);

  return (
    <Router>
      {console.log(students)}
      <OffcanvasExample />
      <Routes>
        <Route
          path="/edit-student"
          element={
            <>
              <EditStudent />
            </>
          }
        />
        <Route
          path="/add-student"
          element={
            <>
              <EnrollmentForm students={students} getstudents={getstudents} />
            </>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <>
              <AdminDashboard students={students} />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
