import { useState } from "react";

// Import your profile sub-components
import BasicDetails from "./BasicDetails";
import Experience from "./Experience";
import Education from "./Education";
import Award from "./Award";

const DoctorProfile = () => {
  // State to track which component to show
  const [activeTab, setActiveTab] = useState("basic");

  

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
  
      <div className="row gap-4 px-2">
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
  
  );
};

export default DoctorProfile;