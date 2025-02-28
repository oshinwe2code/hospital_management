import React from 'react'

import "../pateint_Vital/PatientVital.css";
import Sidebar from '../../../common-element/Sidebar';

import img from "../../../../assets/profile-01.webp";
import HeadingNav from "../../../common-element/HeadingNav";
import PatientMedicalheader from './PatientMedicalheader';
import PatientMedicalTable from './PatientMedicalTable';



export default function PateintMedicalRecords() {
  const sidebarLinks = [
    { path: "/patient-dashboard", label: "Dashboard", icon: <i className="bi bi-speedometer2"></i> },
    { path: "/patient-appointment", label: "My Appointments", icon: <i className="bi bi-envelope"></i> },
    { path: "/patient-favourites", label: "Favourites", icon: <i className="bi bi-calendar-check"></i> },
    { path: "/patient-dependants", label: "Dependants", icon: <i className="bi bi-clock"></i> },
    { path: "/patient-medical-records", label: "Medical Records", icon: <i className="bi bi-person-check"></i> },
    { path: "/patient-wallet", label: "Wallet", icon: <i className="bi bi-wallet2"></i> },
    { path: "/patient-invoices", label: "Invoices", icon: <i className="bi bi-cash"></i> },
    { path: "/patient-message", label: "Message", icon: <i className="bi bi-share"></i> },
    { path: "/patient-vitals", label: "Vitals", icon: <i className="bi bi-heart-pulse"></i> },
    { path: "/patient-settings", label: "Settings", icon: <i className="bi bi-gear"></i> },
    { path: "/patient-logout", label: "Logout", icon: <i className="bi bi-box-arrow-right"></i> },
];
  return (
    
     <div className="container pb-5">
                <div className="row">
                    
                    <HeadingNav
                        icon={<i className="bi bi-house"></i>}
                        title="Patient"
                        linktitle="Medical Records"
                    />
                </div>
                <div className="row gap-4 px-2">
                    <div className="col-md-3 border border-gray rounded-3 p-0 overflow-hidden">
                        <div className="c_profile_card c_background">
                            <img src={img} alt="profile" />
                            <a href="/doctor">Tom Jerry</a>
                            <p>Patient ID : PT254654</p>
                            <span className="text-center px-2 rounded-1 border border-primary">
                                Male 23 years
                            </span>
                        </div>
                        <Sidebar links={sidebarLinks} />
                    </div>
                    <div className="col-md-8 p-0 overflow-hidden ">
                       <PatientMedicalheader/>
                       <PatientMedicalTable/>
                    </div>
                </div>
            </div>
  )
}
