import { useState } from "react";
import HeadingNav from "../../common-element/HeadingNav";
import Sidebar from "../../common-element/Sidebar";
import img from "../../../assets/react.svg";
import "../../Styles/doctor/DoctorProfile.css";

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

// Import your profile sub-components
import BasicDetails from "./profilesetting/BasicDetails";
import Experience from "./profilesetting/Experience";
import Education from "./profilesetting/Education";
import Award from "./profilesetting/Award";

const DoctorProfile = () => {
  // State to track which component to show
  const [activeTab, setActiveTab] = useState("basic");

  const sidebarLinks = [
    { path: "/dashboard", label: "Dashboard", icon: <RxDashboard /> },
    { path: "/request", label: "Request", icon: <FaRegEnvelope /> },
    { path: "/appointment", label: "Appointment", icon: <FaRegCalendarCheck /> },
    { path: "/available-timings", label: "Available Timings", icon: <FaRegClock /> },
    { path: "/my-patients", label: "My Patients", icon: <RiUserFollowLine /> },
    { path: "/accounts", label: "Accounts", icon: <FaRegUserCircle /> },
    { path: "/payout-settings", label: "Payout Settings", icon: <CiMoneyBill /> },
    { path: "/profile-setting", label: "Profile Settings", icon: <FaRegShareSquare /> },
  ];

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "awards":
        return <Award />;
      case "basic":
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="container pb-4">
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
        <div className="col p-0">
          <h2 className="border-bottom border-gray font-size-2 font-weight-700 pb-2">
            Doctor Profile
          </h2>

          {/* Button Group Navigation */}
          <div className="d-flex gap-2 flex-wrap mt-3 py-3 px-4 rounded-3 shadow-lg">
            <button
              onClick={() => setActiveTab("basic")}
              className={activeTab === "basic" ? "c_btn active border border-gray" : "c_btn border border-gray"}
            >
              Basic Details
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={activeTab === "experience" ? "c_btn active border border-gray" : "c_btn border border-gray"}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={activeTab === "education" ? "c_btn active border border-gray" : "c_btn border border-gray"}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={activeTab === "awards" ? "c_btn active border border-gray" : "c_btn border border-gray"}
            >
              Awards
            </button>
            {/* Add more button items for Insurance, Business Hours if needed */}
          </div>

          {/* Content Section */}
          <div className="mt-2 p-0">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;