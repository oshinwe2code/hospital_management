// /* eslint-disable react/no-unknown-property */
// import React from 'react'

import { useState } from "react";
import img from "../../../../assets/profile-01.webp";
import { CiFilter, CiMail, CiPhone, CiSearch } from "react-icons/ci";
import { FaRegClock, FaRegEye } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import propTypes from "prop-types";

const Appointment = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  // console.log(initialAppointment);

  return (
    <div className="p-0">

      <div className="d-flex gap-4 px-2 py-2 justify-content-between border-bottom border-gray">
        <h4 className=" font-size-2 font-weight-700 pb-2">Appointments</h4>
        <div className=" d-flex gap-2 align-items-center border border-gray rounded-3 px-2 py-0 w-25">
          <button className="bg-transparent border-0">
            <CiSearch />
          </button>
          <input
            type="search"
            placeholder="Search"
            className=" border-0 outline-0 p-0 m-0 shadow-none"
          />
        </div>
      </div>

      {/* Button Group Navigation */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 flex-wrap mt-3 py-3 rounded-3">
          <button
            className={`c_btn ${activeTab === "upcoming" ? "active" : ""
              } border border-gray`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming <span>(3)</span>
          </button>
          <button
            className={`c_btn ${activeTab === "cancelled" ? "active" : ""
              } border border-gray`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled <span>(1)</span>
          </button>
          <button
            className={`c_btn ${activeTab === "completed" ? "active" : ""
              } border border-gray`}
            onClick={() => setActiveTab("completed")}
          >
            Completed <span>(1)</span>
          </button>
        </div>

        <div className="d-flex gap-2 flex-wrap mt-3 py-3 rounded-3">
          <input
            type="date"
            placeholder="from date to date"
            value={new Date().toISOString().split("T")[0]}
            className=" border border-gray rounded-3 outline-0 p-1 m-0 shadow-none"
          />

          <div className=" position-relative">
            <button
              className="c_btn border border-gray position-relative"
              onClick={() => setShow(!show)}
            >
              <CiFilter /> filter
            </button>

            {/* Filter Modal */}
            {show && (
              <div className="c_dropdown">
                <div
                  className="accordion accordion-flush"
                  id="accordionExample"
                >
                  <div className="accordion-item border border-gray mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Name
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className=" d-flex gap-2 align-items-center border border-gray rounded-3 px-2 py-2 w-100">
                          <button className="bg-transparent border-0">
                            <CiSearch />
                          </button>
                          <input
                            type="search"
                            placeholder="Search"
                            className=" border-0 outline-0 p-0 m-0 shadow-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border border-gray mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Appointment Type
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type"> All type</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type"> Video call</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type"> Audio Call</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">Chat </label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">Direct Visit</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Visit Type
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">All Visit</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">General Visit</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">Consultation</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">Follow up</label>
                          </li>
                          <li className="mb-2 d-flex align-items-center gap-2">
                            {" "}
                            <input
                              type="checkbox"
                              className="form-check-input m-0 p-0 shadow-none border border-black rounded-3"
                            />
                            <label htmlFor="All type">Direct Visit</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button className="c_btn border border-gray">
                    Reset Filter
                  </button>
                  <button className="c_btn_primary border border-gray">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Appointment */}
      {activeTab && activeTab === "upcoming" && (
        <ul className="row border border-gray rounded-3 p-0 align-items-center">
          <li className="col d-flex align-items-center mt-4">
            <img
              src={img}
              alt="profile photo"
              className="rounded-3 me-2"
              width="50px"
            />
            <div className="d-flex flex-column mt-2">
              <span className="text-primary font-weight-700">#Apt-001</span>
              <p className="font-weight-bold">
                <b>Adrian</b>
              </p>
            </div>
          </li>
          <li className="col d-flex flex-column align-items-start mt-4">
            <span className="text-muted " style={{ fontSize: "14px" }}>
              <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
            </span>
            <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
              <p className="p-0">General Visit</p>
              <p className="p-0">Video Call</p>
            </div>
          </li>
          <li className="col d-flex flex-column align-items-start">
            <span>
              <CiMail className="me-2" /> adrian@example.com
            </span>
            <span>
              <CiPhone className="me-2" /> 123456789
            </span>
          </li>
          <li className="col-auto d-flex gap-2 pt-2">
            <button
              className="c_btn border border-gray rounded-circle d-flex justify-content-center align-items-center p-0"
              style={{ width: "30px", height: "30px" }}
            >
              <FaRegEye fontSize={15} />
            </button>
            <button
              className="c_btn border border-gray rounded-circle d-flex justify-content-center align-items-center p-0"
              style={{ width: "30px", height: "30px" }}
            >
              <IoChatbubblesOutline fontSize={15} />
            </button>
            <button
              className="c_btn border border-gray rounded-circle d-flex justify-content-center align-items-center p-0"
              style={{ width: "30px", height: "30px" }}
            >
              <RxCross1 fontSize={15} />
            </button>
          </li>
          <li className="col-auto">
            <button className="c_btn_primary border border-gray rounded-3">
              Start Now
            </button>
          </li>
        </ul>
      )}
      {/* Cancelled Appointment */}

      {activeTab && activeTab === "cancelled" && (
        <ul className="row border border-gray rounded-3 p-0 align-items-center">
          <li className="col-md-4 d-flex align-items-center mt-4">
            <img
              src={img}
              alt="profile photo"
              className="rounded-3 me-2"
              width="50px"
            />
            <div className="d-flex flex-column mt-2">
              <span className="text-primary font-weight-700">#Apt-001</span>
              <p className="font-weight-bold">
                <b>Adrian</b>
              </p>
            </div>
          </li>
          <li className="col-md-4 d-flex flex-column align-items-start mt-4">
            <span className="text-muted " style={{ fontSize: "14px" }}>
              <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
            </span>
            <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
              <p className="p-0">General Visit</p>
              <p className="p-0">Video Call</p>
            </div>
          </li>
          <li className="col-md-4 d-flex  justify-content-end">
            <button className="c_btn_primary border border-gray rounded-3">
              View Details
            </button>
          </li>
        </ul>
      )}

      {/* Completed Appointment */}
      {activeTab && activeTab === "completed" && (
        <ul className="row border border-gray rounded-3 p-0 align-items-center">
          <li className="col-md-4 d-flex align-items-center mt-4">
            <img
              src={img}
              alt="profile photo"
              className="rounded-3 me-2"
              width="50px"
            />
            <div className="d-flex flex-column mt-2">
              <span className="text-primary font-weight-700">#Apt-001</span>
              <p className="font-weight-bold">
                <b>Adrian</b>
              </p>
            </div>
          </li>
          <li className="col-md-4 d-flex flex-column align-items-start mt-4">
            <span className="text-muted " style={{ fontSize: "14px" }}>
              <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
            </span>
            <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
              <p className="p-0">General Visit</p>
              <p className="p-0">Video Call</p>
            </div>
          </li>
          <li className="col-md-4 d-flex  justify-content-end">
            <button className="c_btn_primary border border-gray rounded-3">
              View Details
            </button>
          </li>
        </ul>
      )}

      {/* pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>


  );
};

Appointment.propTypes = {
  initialAppointment: propTypes.array,
};
export default Appointment;
