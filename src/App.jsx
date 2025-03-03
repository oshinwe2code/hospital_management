import { Route, Routes,useLocation } from "react-router";
import "./App.css";
import "./component/Styles/general/General.css";
// import DoctorProfile from "./component/pages/doctor/DoctorMain";
import DoctorMain from "./component/pages/doctor/DoctorMain";
import Navbar from "./component/pages/navbar/Navbar";
import PatientMain from "./component/pages/patient/PatientMain";

function App() {
  const location = useLocation();

  // List of routes where Navbar shouldn't be shown
  const noNavbarRoutes = ["/patientregister","/patientlogin","/patientforgetpassword","/doctorlogin","/doctorregister","/doctorregister2"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/doctor" element={<DoctorMain />} />
        <Route path="/patient" element={<PatientMain />} />
      </Routes>
    </>
  );
}

export default App;
