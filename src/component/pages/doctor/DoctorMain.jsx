// import  from 'react'

import HeadingNav from "../../common-element/HeadingNav";
import Sidebar from "../../common-element/Sidebar";
import "../../Styles/doctor/DoctorMain.css";
import img from "../../../assets/react.svg";
import {
  FaRegEnvelope,
  FaRegCalendarCheck,
  FaRegClock,
  FaRegUserCircle,
  FaRegShareSquare,
  FaHome,
} from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { RiUserFollowLine } from "react-icons/ri";

// import Appointment from "./appointments/Appointment";
import Request from "./Request";
import { Route, Routes } from "react-router";
import Appointment from "./appointments/Appointment";


const DoctorMain = () => {
  const sidebarLinks = [
    { path: "dashboard", label: "Dashboard", icon: <RxDashboard /> }, // Remove leading '/'
    { path: "request", label: "Request", icon: <FaRegEnvelope /> },
    { path: "appointment", label: "Appointment", icon: <FaRegCalendarCheck /> },
    {
      path: "available-timings",
      label: "Available Timings",
      icon: <FaRegClock />,
    },
    { path: "my-patients", label: "My Patients", icon: <RiUserFollowLine /> },
    { path: "accounts", label: "Accounts", icon: <FaRegUserCircle /> },
    {
      path: "payout-settings",
      label: "Payout Settings",
      icon: <CiMoneyBill />,
    },
    { path: "profile", label: "Profile Settings", icon: <FaRegShareSquare /> },
  ];

  return (
    <div className="container pb-5">
      {/* banner */}
      <div className="row">
        <HeadingNav
          icon={<FaHome />}
          title="Doctor Profile"
          linktitle="Doctor"
        />
      </div>

      <div className="row gap-4 px-2">
        {/* Sidebar Column */}
        <div className="col-sm-3 border border-gray rounded-3 p-0 overflow-hidden">
          {/* Profile Card */}
          <div className="c_profile_card c_background">
            <img src={img} alt="profile" />
            <a href="/doctor">Dr. John Doe</a>
            <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
            <span className="text-center px-2 rounded-1 border border-primary">
              dentist
            </span>
            <div className="w-100 px-4">
              <label
                htmlFor="Availability"
                className="w-100 pb-1 c_label text-start bg-white"
              >
                Availability
              </label>
              <select name="Availability" className="w-100 p-1 rounded-1">
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>
          {/* Sidebar Navigation */}
          <Sidebar links={sidebarLinks} />
        </div>

                {/* Main Content Column */}
                <div className="col">
                    <Appointment />
                </div>
            </div>
        </div>
    )
}

export default DoctorMain;
