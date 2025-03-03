import { Route, Routes,useLocation } from "react-router";
import "./App.css";
import "./component/Styles/general/General.css";
// import DoctorProfile from "./component/pages/doctor/DoctorMain";
import DoctorMain from "./component/pages/doctor/DoctorMain";
import Navbar from "./component/pages/navbar/Navbar";
import PatientMain from "./component/pages/patient/PatientMain";

import PatientVital from "./component/pages/patient/pateint_Vital/PatientVital";
//import PateintMedicalRecords from "./component/pages/patient/PateintMedicalRecords";
import PateintMedicalRecords from"./component/pages/patient/MedicalRecords/PateintMedicalRecords";
//import Patient_Register from "./component/pages/registerPage/Patient_Register";
import Patient_Register from "./component/pages/registerPage/Patient_Register";
//import Patient_Login from "./component/pages/registerPage/Patient_login";
import Patient_Login from "./component/pages/registerPage/Patient_Login";
import Patient_Forget from "./component/pages/registerPage/Patient_Forget";
import Doctor_Login from "./component/pages/registerPage/Doctor_Login";
import Doctor_Register from "./component/pages/registerPage/Doctor_Register";
import Doctor_Register2 from "./component/pages/registerPage/Doctor_Register2";
//import BasicDetails from "./component/pages/doctor/profilesetting/BasicDetails";


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
        <Route path="/vital" element={<PatientVital />} />
        <Route path="/patient-medical-records" element={<PateintMedicalRecords />} />
        <Route path="/patientregister" element={<Patient_Register />} />
        <Route path="/patientlogin" element={<Patient_Login/>}/>
        <Route path="/patientforgetpassword" element={<Patient_Forget/>}/>
        <Route path="/doctorlogin" element={<Doctor_Login/>}/>
        <Route path="/doctorregister" element={<Doctor_Register/>}/>
        <Route path="/doctorregister2" element={<Doctor_Register2/>}/>
       
       
      </Routes>
    </>
  );
}

export default App;
