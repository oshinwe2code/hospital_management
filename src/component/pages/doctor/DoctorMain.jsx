import { FaRegEnvelope, FaRegCalendarCheck, FaRegClock, FaRegUserCircle, FaRegShareSquare, FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { FaShareAlt } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { RiUserFollowLine } from "react-icons/ri";
import { Route, Routes } from "react-router";
import HeadingNav from "../../common-element/HeadingNav";
import Sidebar from "../../common-element/Sidebar";
import Appointment from "./appointments/Appointment";
import Request from "./Request";
import ProfileSettings from "./profilesetting/ProfileSettings"; // Import ProfileSettings
import "../../Styles/doctor/DoctorMain.css";
import img from "../../../assets/react.svg";
import ChangePassword from "./changepassword/ChangePassword";
import SocialMedia from "./socialmedia/SocialMedia";
import TwoFactorAuthentication from "../patient/settings/TwoFactorAuthentication";
import DeleteAccount from "../patient/settings/DeleteAccount";

const DoctorMain = () => {
  const sidebarLinks = [
    { path: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
    { path: "request", label: "Request", icon: <FaRegEnvelope /> },
    { path: "appointment", label: "Appointment", icon: <FaRegCalendarCheck /> },
    { path: "available-timings", label: "Available Timings", icon: <FaRegClock /> },
    { path: "my-patients", label: "My Patients", icon: <RiUserFollowLine /> },
    { path: "accounts", label: "Accounts", icon: <FaRegUserCircle /> },
    { path: "payout-settings", label: "Payout Settings", icon: <CiMoneyBill /> },
    { path: "profile", label: "Profile Settings", icon: <FaRegShareSquare /> },
    { path: "social-media", label: "Social Media", icon: <FaShareAlt /> },
    { path: "change-password", label: "Change Password", icon: <FaKey /> },
   
    { path: "two-factor", label: "two factor", icon: <FaKey /> },
    {path: "delete-account", label:"Delete Acc", icon:<FaKey/>},
    // Change Password with FaKey icon
  ];

  return (
    <div className="container pb-5">
      {/* banner */}
      <div className="row">
        <HeadingNav icon={<FaHome />} title="Doctor Profile" linktitle="Doctor" />
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
          <Routes>
            <Route path="dashboard" element={<Appointment />} />
            <Route path="request" element={<Request />} />
            <Route path="appointment" element={<Appointment />} />
            {/* Render ProfileSettings instead of BasicDetails for the profile route */}
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="social-media" element={<SocialMedia/>} />
            <Route path="change-password" element={<ChangePassword/>}/>
            <Route path="two-factor" element={<TwoFactorAuthentication/>}/>
            <Route path="delete-account" element={<DeleteAccount/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DoctorMain;
