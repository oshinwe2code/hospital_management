import { Route, Routes } from "react-router";
import "./App.css";
import "./component/Styles/general/General.css";
// import DoctorProfile from "./component/pages/doctor/DoctorMain";
import DoctorMain from "./component/pages/doctor/DoctorMain";
import Navbar from "./component/pages/navbar/Navbar";
import PatientMain from "./component/pages/patient/PatientMain";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/doctor" element={<DoctorMain />} />
        <Route path="/patient" element={<PatientMain />} />
      </Routes>
    </>
  );
}

export default App;
