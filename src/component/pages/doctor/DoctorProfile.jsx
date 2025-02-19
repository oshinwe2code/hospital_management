// import React from "react";
import { FaHome } from "react-icons/fa";
import HeadingNav from "../../common-element/HeadingNav"; // Assuming this is your navigation component
import Sidebar from "../../common-element/Sidebar"; // Adjust the path if needed

const DoctorProfile = () => {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="">
          <HeadingNav
            icon={<FaHome />}
            title="Doctor Profile"
            linktitle="Doctor"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-8  px-4">
          <h2>Doctors Profile Details</h2>
          <p>This is where you can display the doctors information.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
