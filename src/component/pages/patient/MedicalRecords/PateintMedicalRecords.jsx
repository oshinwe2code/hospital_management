import React from 'react'

import "../pateint_Vital/PatientVital.css";
import Sidebar from '../../../common-element/Sidebar';

import img from "../../../../assets/profile-01.webp";
import HeadingNav from "../../../common-element/HeadingNav";
import PatientMedicalheader from './PatientMedicalheader';
import PatientMedicalTable from './PatientMedicalTable';



export default function PateintMedicalRecords() {

    return (
        <div className="container pb-4">
            <div className="row">
                {/* Main Content Column */}
                <div className="col-md-12">
                    {/* Latest Updates and Table */}
                    <PatientMedicalheader />
                    <PatientMedicalTable />
                </div>
            </div>
        </div>
    )
}
