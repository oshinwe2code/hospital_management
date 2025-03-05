import PatientSidebar from '../../common-element/PatientSidebar'; // Import PatientSidebar
import { Link } from 'react-router-dom'; // Correct import
import { Route, Routes } from "react-router-dom"; // Correct router import
import img from "../../../assets/react.svg";
import { RxDashboard } from "react-icons/rx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import HeadingNav from '../../common-element/HeadingNav';
import { FaHome } from 'react-icons/fa';
import Appointment from '../doctor/appointments/Appointment';
import PatientVital from "./pateint_Vital/PatientVital";
import PateintMedicalRecords from './MedicalRecords/PateintMedicalRecords';
import PatientProfile from './profilesetting/PatientProfile';
import Dependent from './Dependent/Dependent';

const PatientMain = () => {
    const patientsidebarLinks = [
        { path: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
        { path: "my-appointment", label: "My Appointment", icon: <RxDashboard /> },
        { path: "favorite", label: "Favorites", icon: <RxDashboard /> },
        { path: "dependent", label: "Dependents", icon: <RxDashboard /> },
        { path: 'patient-medical-records', label: 'Medical Records', icon: <IoSettingsOutline /> },
        { path: "wallet", label: "Wallet", icon: <RxDashboard /> },
        { path: "invoices", label: "Invoices", icon: <RxDashboard /> },
        { path: 'message', label: 'Message', icon: <FaRegShareFromSquare /> },
        { path: 'patient-vital', label: 'Vitals', icon: <IoSettingsOutline /> },
        { path: 'settings', label: 'Settings', icon: <IoSettingsOutline /> },
        { path: 'logout', label: 'Logout', icon: <IoSettingsOutline /> },
    ];

    return (
        <div className="container pb-4">
            {/* Heading at the top */}
            <div className="row mb-4">
                <HeadingNav
                    icon={<FaHome />}
                    title="Patient Profile"
                    linktitle="Patient"
                />
            </div>

            <div className="row">
                {/* Sidebar Column (3 columns wide) */}<br></br>
                <div className="col-md-3 border border-gray rounded-3 p-0 overflow-hidden">
                    {/* Profile Card */}
                    <div className="c_profile_card c_background p-3">
                        <img
                            src={img}
                            alt="profile"
                            className="img-fluid mb-2"
                        /><br></br>
                        <Link to="/" className="text-decoration-none">
                            Handrita Hayes
                        </Link>
                        <div className="text-muted">Patient Id: 1234</div>
                        <div className="font-weight-bold">Female, 32 Years 3 months</div>
                    </div>

                    {/* Sidebar */}
                    <PatientSidebar links={patientsidebarLinks} />
                </div>

                {/* Main Content Column (9 columns wide) */}
                <div className="col-md-9">
                    <Routes>
                        
                        <Route path='patient-vital' element={<PatientVital />} />
                        <Route path='patient-medical-records' element={<PateintMedicalRecords/>} />
                        <Route path='settings' element={<PatientProfile/>} />
                        <Route path='dependent' element={<Dependent/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default PatientMain;
