// import React from 'react'
import Sidebar from '../../common-element/Sidebar'
import { Link } from 'react-router'

import img from "../../../assets/react.svg";
import { RxDashboard } from "react-icons/rx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import HeadingNav from '../../common-element/HeadingNav';
import { FaHome } from 'react-icons/fa';
import Appointment from '../doctor/appointments/Appointment';
import profileImg from "../../../assets/profile-01.webp";
import MyPatient from '../doctor/mypatient/MyPatient';
// import AppointmentDetails from '../doctor/appointments/AppointmentDetails';


const PatientMain = () => {
    const sidebarLinks = [
        { path: "/dashboard", label: "Dashboard", icon: <RxDashboard /> },
        { path: '/profile', label: 'Profile', icon: <FaRegShareFromSquare /> },
        { path: '/settings', label: 'Settings', icon: <IoSettingsOutline /> },
    ];



    const appointmentsData = [
        { id: "Apt-001", name: "Adrian", profileImage: profileImg, date: "24 Feb 2025", time: "10:00 AM", visitType: "General Visit", appointmentType: "Video Call", email: "adrian@example.com", phone: "123456789" },
        { id: "Apt-002", name: "Emily", profileImage: profileImg, date: "25 Feb 2025", time: "11:00 AM", visitType: "Consultation", appointmentType: "Audio Call", email: "emily@example.com", phone: "987654321" },
    ];
    return (
        <div className="container pb-5">
            <div className="row">
                <HeadingNav
                    icon={<FaHome />}
                    title="Patient Profile"
                    linktitle="Patient"
                />
            </div>
            <div className="row gap-4 px-2">
                {/* Sidebar Column */}
                <div className="col-sm-3 border border-gray rounded-3 p-0 overflow-hidden">
                    {/* Profile Card */}
                    <div className=" c_profile_card c_background">
                        <img
                            src={img}
                            alt="profile"
                        />
                        <Link to="/">
                            Handrita Hayes
                        </Link>
                        <span className="text-muted pb-0">
                            Patient Id: 1234
                        </span>
                        <span className=" font-weight-700 mb-0">
                            Female 32 Years 3 months
                        </span>

                    </div>
                    {/* Sidebar */}
                    <Sidebar links={sidebarLinks} />
                </div>

                {/* Main Content Column */}
                <div className="col">
                    {/* <Appointment  initialAppointments={appointmentsData}/> */}
                    {/* <AppointmentDetails /> */}
                    <MyPatient/>
                </div>
            </div>

        </div>
    )
}

export default PatientMain