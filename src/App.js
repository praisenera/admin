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

function App() {
  return (
    <Router>
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
              <EnrollmentForm />
            </>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <>
              <AdminDashboard />
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
          path="/register"
          element={
            <>
              <Registration />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
