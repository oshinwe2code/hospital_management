// import React from 'react'

import { useState } from "react";
import PatientCard from "./PatientCard";
import { CiFilter, CiSearch } from "react-icons/ci";

const MyPatient = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [show, setShow] = useState();

  return (
    <div>
      <div className="d-flex gap-4 py-2 justify-content-between border-bottom border-gray">
        <h4 className=" font-size-2 font-weight-700 pb-2">My Patient</h4>
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
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex gap-2 flex-wrap mt-3 py-3 rounded-3">
          <button
            className={`c_btn ${
              activeTab === "active" ? "active" : ""
            } border border-gray`}
            onClick={() => setActiveTab("active")}
          >
            Active <span>(3)</span>
          </button>
          <button
            className={`c_btn ${
              activeTab === "inactive" ? "active" : ""
            } border border-gray`}
            onClick={() => setActiveTab("inactive")}
          >
            InActive <span>(1)</span>
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

      {activeTab === "active" && (
        <div className="row">
          <div className="col-sm-4 p-2">
            <PatientCard />
          </div>
          <div className="col-sm-4 p-2">
            <PatientCard />
          </div>
          <div className="col-sm-4 p-2">
            <PatientCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPatient;
