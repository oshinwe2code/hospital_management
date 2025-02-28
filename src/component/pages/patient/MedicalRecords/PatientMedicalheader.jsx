import React from 'react';
import AddMedicalRecords from './AddMedicalRecords';

export default function PatientMedicalheader() {
    return (
        <div className='row p-3'>
            <div className="col-lg-12 col-xl-12 col-md-12 border border-gray rounded-3">
                <div className="dashboard-header"><br></br>
                    {/* Updated to align heading left and buttons right */}
                    <div className="d-flex justify-content-between align-items-center">
                        <h2><b>Records</b></h2>
                        <div>
                            <button
                                className="btn btn-primary me-2"
                                type="button"
                                style={{ height: "50px", padding: "0 15px", fontSize: "15px", whiteSpace: "nowrap" }}
                                 // Linking to the modal ID
                            >
                                <b>Medical Records</b>
                            </button>
                            <button
                                className="btn"
                                type="button"
                                style={{ height: "50px", padding: "0 15px", fontSize: "15px", whiteSpace: "nowrap", border: "2px solid black" }}
                                data-bs-toggle="modal"
                                data-bs-target="#prescription_modal"  // This would link to another modal if needed
                            >
                                <b>Prescriptions</b>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <form className="d-flex justify-content-between w-100 align-items-center" role="search">
                        <div className="flex-grow-1 me-3">
                            <input
                                className="form-control form-control-sm"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ height: "50px" }}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            type="button"
                            style={{ height: "50px", padding: "0 15px", fontSize: "15px", whiteSpace: "nowrap" }}
                            data-bs-toggle="modal"
                            data-bs-target="#add_medical_records"  // Linking to the modal ID
                        >
                            <b>Add Medical Records</b>
                        </button>
                    </form>
                    <br />
                </div>
                <div className="dashboard-card w-100 medical-details-item ms-3px">
                    <div className="dashboard-card-head medical-detail-head d-flex justify-content-between align-items-center">
                        <div className="appointment-tabs"></div>
                    </div>
                </div>
            </div>
            <AddMedicalRecords/>
        </div>
    );
}
