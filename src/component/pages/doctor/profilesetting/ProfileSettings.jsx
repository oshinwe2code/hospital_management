import { useState } from "react";

// Import your profile sub-components
import BasicDetails from "./BasicDetails";
import Experience from "./Experience";
import Education from "./Education";
import Award from "./Award";
import Insurence from "./Insurence";
import Clinic from "./Clinic";

const ProfileSettings = () => {
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
      case "insurance":
        return<Insurence/>
      case"clinic":
      return<Clinic/>
      case "basic":
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="row gap-4 ">
      {/* Main Content Column */}
      <div className="col p-0">
       

        {/* Button Group Navigation */}
        <div className="d-flex gap-2 flex-wrap  ">
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
          <button
            onClick={() => setActiveTab("insurance")}
            className={activeTab === "insurance" ? "c_btn active border border-gray" : "c_btn border border-gray"}
          >
            Insurances
          </button>
          <button
            onClick={() => setActiveTab("clinic")}
            className={activeTab === "clinic" ? "c_btn active border border-gray" : "c_btn border border-gray"}
          >
            Clinics
          </button>
        </div>

        {/* Render the active tab's content */}
        <div className="tab-content pt-3">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default ProfileSettings;
