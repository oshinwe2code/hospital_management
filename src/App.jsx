import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./component/Styles/general/General.css";
import DoctorProfile from "./component/pages/doctor/DoctorProfile";
import Navbar from "./component/pages/navbar/Navbar";
import PatientProfile from "./component/pages/patient/PatientProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/doctor/*" element={<DoctorProfile />} />
        <Route path="/patient" element={<PatientProfile />} />
        
      </Routes>
    </>
  );
}

export default App;
