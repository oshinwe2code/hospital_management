import React from "react";
import "../../../Styles/doctor/DoctorMain.css";
import "./PatientVital.css";
import LatestUpdate from "./LatestUpdate";
import Latesttable from "./Latesttable";

export default function PatientVital() {
    return (
        <div className="container pb-4">
            <div className="row">
                {/* Main Content Column */}
                <div className="col-md-12">
                    {/* Latest Updates and Table */}
                    <LatestUpdate />
                    <Latesttable />
                </div>
            </div>
        </div>
    );
}
