import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddVitalModal from './AddVitalModal';


export default function LatestUpdate() {
    return (
        <div className="row p-3">

            <div className="col-lg-12 col-xl-12 col-md-12 border border-gray rounded-3 ">
                <div className="dashboard-header">
                    <br></br>
                    <h2><b>Vitals</b></h2><br />

                </div>
                <div className="dashboard-card w-100 medical-details-item ms-3px">
                    <div className="dashboard-card-head medical-detail-head d-flex justify-content-between align-items-center">
                        <div className="header-title">
                            <p><b>Latest Updated Vitals</b></p>
                        </div>
                        <div className="latest-update">
                            <p><i className="bi bi-calendar-check me-2"></i>Last update on : 24 Mar 2023</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="dashboard-card-body">
                        <div className="row g-4">
                            <form>
                                <thead>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-activity me-2" style={{ color: "red" }}></i>
                                            <span style={{ fontSize: "13px" }}>Blood Pressure &nbsp;</span>
                                        </span>
                                    </th>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-heart me-2" style={{ color: "orange" }}></i>
                                            <span style={{ fontSize: "13px" }}>Heart Rate &nbsp;</span>
                                        </span>
                                    </th>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-droplet me-2" style={{ color: "darkblue" }}></i>
                                            <span style={{ fontSize: "13px" }}>Glucose Level &nbsp;</span>
                                        </span>
                                    </th>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-thermometer-high me-2" style={{ color: "darkorange" }}></i>
                                            <span style={{ fontSize: "13px" }}>Body Temperature &nbsp;</span>
                                        </span>
                                    </th>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-body-text me-2" style={{ color: "purple" }}></i>
                                            <span style={{ fontSize: "13px" }}>BMI &nbsp;</span>
                                        </span>
                                    </th>
                                    <th>
                                        <span className="d-inline-flex align-items-center">
                                            <i className="bi bi-heart-fill me-2" style={{ color: "blue" }}></i>
                                            <span style={{ fontSize: "13px" }}>SPo2 &nbsp;</span>
                                        </span>

                                    </th>
                                </thead>
                                <tbody>
                                  <td>
                                  <h6><b>100 mg/dl</b></h6>
                                  </td>
                                  <td>
                                  <h6><b>140 Bpm</b></h6>
                                  </td>
                                  <td>
                                  <h6><b>70 - 90</b></h6>
                                  </td>
                                  <td>
                                  <h6><b>37.5 C</b></h6>
                                  </td>
                                  <td>
                                  <h6><b>20.1 kg/m²</b></h6>
                                  </td>
                                  <td>
                                  <h6><b>96%</b></h6>
                                  </td>
                                </tbody>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="dashboard-header border-0 m-0 p-0">

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
                            data-bs-target="#addVitalModal"
                        >
                            <b>Add Vital</b>
                        </button>
                    </form>
                    <br></br>

                </div>
            </div>
            {/* Modal Component */}
            <AddVitalModal />
        </div>
    );
}
