import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AdminDashboard from "./Components/AdminDashboard";
import OffcanvasExample from "./NavComponent";
import EnrollmentForm from "./Components/Enrollment";
import EditStudent from "./Components/EditStudents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./config/firebaseconfig";
import { useEffect, useState } from "react";
import ApproveStudents from "./Components/Approval";
import StudentViewerEditor from "./Components/Registration";

function App() {
  const dbRefstd = collection(db, "students");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  const [students, setStudents] = useState([]);
  const getstudents = async () => {
    console.log("get students");
    try {
      const data = await getDocs(dbRefstd);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
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
      <OffcanvasExample />
      <Routes>
        <Route
          path="/edit/:id"
          element={
            <>
              <EditStudent
                students={students}
                key={students}
                getstudents={getstudents}
              />
            </>
          }
        />

        <Route
          path="/add-student"
          element={
            <>
              <ApproveStudents
                students={students}
                key={students}
                getstudents={getstudents}
              />
            </>
          }
        />

        <Route
          path="/student/:id"
          element={
            <>
              <StudentViewerEditor
                students={students}
                key={students}
                getstudents={getstudents}
              />
            </>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <>
              <AdminDashboard
                students={students}
                key={students}
                getstudents={getstudents}
              />
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
          path="/admin"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/enrollment1"
          element={
            <>
              <EnrollmentForm />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
