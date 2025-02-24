// import React from 'react'
import { CiMail, CiPhone } from "react-icons/ci";
import img from "../../../../assets/profile-01.webp";

import { BiArrowBack } from "react-icons/bi";
import { FaRegClock, FaRegEye, FaRegHospital } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoChatbubblesOutline } from "react-icons/io5";
import "../../../Styles/doctor/Appointment.css";

import TagInput from "../../../common-element/TagInput";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const AppointmentDetails = () => {
  const [medications, setMedications] = useState([]);
  const [startsession, setStartsession] = useState(false);

  const addMedication = () => {
    setMedications([
      ...medications,
      { name: "", type: "", dosage: "", duration: "", instruction: "" },
    ]);
  };

  const updateMedication = (index, field, value) => {
    const updatedMedications = medications.map((med, i) =>
      i === index ? { ...med, [field]: value } : med
    );
    setMedications(updatedMedications);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="d-flex  border-bottom border-gray py-2">
        <button className="c_back_btn ">
          <BiArrowBack fontSize={25} />
        </button>
        <h4 className="font-size-2 font-weight-700 mt-1 ">
          Appointment Details
        </h4>
      </div>

      <div className="  ms-auto border border-gray rounded-3 py-4 px-2">
        <div className="row align-items-center gap-2 px-2 ">
          <div className="col d-flex gap-3">
            <img
              src={img}
              className="img-fluid rounded-3"
              alt="profile"
              width={100}
            />
            <div>
              <p className="font-size-2 font-weight-700 mb-0 text-primary">
                #Apt-001
              </p>
              <p className="font-size-1 font-weight-500 mb-0">Adrian</p>
              <span className="d-block">
                <CiMail /> adrian@example.com
              </span>
              <span>
                <CiPhone /> 8830393923393
              </span>
            </div>
          </div>
          <div className="col-md-4 flex-end">
            <p
              className="font-size-2  mb-0 text-muted "
              style={{ fontWeight: 600 }}
            >
              Type of Appointment
            </p>
            <p
              className="font-size-2 mb-0 d-flex align-items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <FaRegHospital color="green" fontSize={25} /> Direct Visit
            </p>
          </div>

          <div className="col-auto ">
            <div className="d-flex gap-2">
              <span
                className=" mb-0 text-white  px-3 py-2"
                style={{
                  fontWeight: 600,
                  fontSize: "12px",
                  backgroundColor: "gray",
                  borderRadius: "30px",
                }}
              >
                New Patient
              </span>

              <span
                className=" mb-0 text-white  px-3 py-2"
                style={{
                  fontWeight: 600,
                  fontSize: "12px",
                  backgroundColor: "#FFCA18",
                  borderRadius: "30px",
                }}
              >
                Upcoming
              </span>
            </div>
            <p
              className="font-size-2 mb-0 text-end text-sm-start mt-2"
              style={{ fontWeight: 600 }}
            >
              Consultation Fees: $200
            </p>

            <div className="d-flex gap-2 justify-content-end mt-2">
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
            </div>
          </div>
        </div>

        <div className="mt-3 border-top border-gray">
          <ul className="c_appointment_row p-0 ">
            <li className="px-2">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                Appointment Date and Time
              </p>
              <p>01-01-2023, 10:00 AM</p>
            </li>
            <li className="px-2">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                {" "}
                Clinic Location
              </p>
              <p>Adrian`s Dentistry</p>
            </li>
            <li className="px-2 mb-0">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                {" "}
                Location{" "}
              </p>
              <p>Newyork City</p>
            </li>
            <li className="px-2 mb-0">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                {" "}
                Visit type
              </p>
              <p>Direct Visit</p>
            </li>
            <li className="px-2 mb-0">
              <button
                className=" text-white border-0 px-3 py-2"
                style={{ borderRadius: "30px", backgroundColor: "#822BD4" }}
                onClick={() => setStartsession(true)}
              >
                {" "}
                Start Session
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* recent Appointments */}
      {startsession === false && <div className="mt-3">
        <h3>Recent Appointments</h3>

        <ul className="c_appointment_row border border-gray rounded-3 py-2 px-3 py-4 align-items-center">
          <li className=" d-flex align-items-center">
            <img
              src={img}
              alt="profile photo"
              className="rounded-3 me-2"
              width="50px"
            />
            <div className="d-flex flex-column">
              <span className="text-primary font-weight-700">#Apt-001</span>
              <p className="font-weight-bold">
                <b>Adrian</b>
              </p>
            </div>
          </li>
          <li className=" d-flex flex-column align-items-start">
            <span className="text-muted " style={{ fontSize: "14px" }}>
              <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
            </span>
            <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
              <p className="p-0">General Visit</p>
              <p className="p-0">Video Call</p>
            </div>
          </li>
          <li className=" d-flex flex-column align-items-start">
            <span>
              <CiMail className="me-2" /> adrian@example.com
            </span>
            <span>
              <CiPhone className="me-2" /> 123456789
            </span>
          </li>
          <li className=" d-flex  justify-content-end">
            <button
              className="c_btn border border-gray rounded-circle d-flex justify-content-center align-items-center p-0"
              style={{ width: "30px", height: "30px" }}
            >
              <FaRegEye fontSize={15} />
            </button>
          </li>
        </ul>
      </div>}

      {startsession === true && <div className="mt-3">
        <h2 style={{ fontWeight: "600", fontSize: "20px" }}>
          Create Appointment Details
        </h2>
        <div className="border border-gray rounded-3 p-3">
          <h4 style={{ fontWeight: "600", fontSize: "18px" }}>
            Patient information
          </h4>
          <ul
            className="c_appointment_row border-bottom border-gray pb-2"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            <li className="px-2 bg-light">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                Age/Gender
              </p>
              <p> 20 Years/ Male</p>
            </li>
            <li className="px-2 bg-light">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                Address
              </p>
              <p> New York, USA</p>
            </li>
            <li className="px-2 bg-light">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                Blood Group
              </p>
              <p> O+ve</p>
            </li>
            <li className="px-2 bg-light">
              <p className="text-muted" style={{ fontWeight: 600 }}>
                No of Visits
              </p>
              <p> 0</p>
            </li>
          </ul>

          {/* vitals */}

          <h4
            className="mt-3 pb-3"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Vitals
          </h4>
          <div
            className="row g-3"
            style={{ fontWeight: 600, fontSize: "14px" }}
          >
            {/* Temperature */}
            <div className="col-md-3">
              <label className="form-label text-black">Temperature</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 97.8"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  °F
                </span>
              </div>
            </div>

            {/* Pulse */}
            <div className="col-md-3">
              <label className="form-label ">Pulse</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 454"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  mmHg
                </span>
              </div>
            </div>

            {/* Respiratory Rate */}
            <div className="col-md-3">
              <label className="form-label ">Respiratory Rate</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 97.8"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  rpm
                </span>
              </div>
            </div>

            {/* SPO2 */}
            <div className="col-md-3">
              <label className="form-label ">SPO2</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 98"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  %
                </span>
              </div>
            </div>

            {/* Height */}
            <div className="col-md-3">
              <label className="form-label ">Height</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 97.8"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  cm
                </span>
              </div>
            </div>

            {/* Weight */}
            <div className="col-md-3">
              <label className="form-label ">Weight</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 97.8"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  Kg
                </span>
              </div>
            </div>

            {/* Waist */}
            <div className="col-md-3">
              <label className="form-label ">Waist</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 97.8"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  cm
                </span>
              </div>
            </div>

            {/* BMI */}
            <div className="col-md-3">
              <label className="form-label ">BMI</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 454"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  kg/cm²
                </span>
              </div>
            </div>

            {/* BSA */}
            <div className="col-md-3">
              <label className="form-label ">BSA</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: 54"
                />
                <span
                  className="input-group-text"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  m²
                </span>
              </div>
            </div>
          </div>
          {/* previous medical history */}

          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <label
                className="form-label "
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Previous Medical History
              </label>
              <textarea
                className="form-control"
                placeholder="Eg: 54"
                rows={3}
              ></textarea>
            </div>
          </div>
          {/* clinical notes */}
          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <label
                className="form-label "
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Clinical Notes
              </label>
              <textarea
                className="form-control"
                placeholder="Eg: 54"
                rows={3}
              ></textarea>
            </div>
          </div>

          {/* clinical notes */}
          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <h4
                className="pb-1"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Clinical Notes
              </h4>
              <TagInput placeholder="Add New" />
            </div>
          </div>

          {/* complaints */}
          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <h4
                className="pb-1"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Laboratory Tests
              </h4>
              <TagInput placeholder="Add New" />
            </div>
          </div>
          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <h4
                className="pb-1"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Complaints
              </h4>
              <TagInput placeholder="Add New" />
            </div>
          </div>

          {/* diagonosis */}
          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <h4
                className="pb-1"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Diagonosis
              </h4>

              <div className=" d-flex align-items-center justify-content-between pb-3">
                <label
                  htmlFor=""
                  style={{ fontWeight: "600", fontSize: "16px" }}
                >
                  Fever
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Diagnosis"
                  style={{ width: "75%" }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between pb-3">
                <label
                  htmlFor=""
                  style={{ fontWeight: "600", fontSize: "16px" }}
                >
                  Headache
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Diagnosis"
                  style={{ width: "75%" }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between pb-3">
                <label
                  htmlFor=""
                  style={{ fontWeight: "600", fontSize: "16px" }}
                >
                  Stomach Ache
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Diagnosis"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>

          {/* medication  */}

          <div className="row mt-3 pb-3">
            <div className="col-md-12">
              <h4
                className="pb-1"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                Medication
              </h4>
              <div className="d-flex gap-2 align-items-center justify-content-end pb-3">
                <button
                  className="text-primary border-0 bg-transparent"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  onClick={addMedication}
                >
                  Add new
                </button>
              </div>
              {medications.map((med, index) => (
                <div
                  key={index}
                  className="d-flex gap-2 align-items-center justify-content-between pb-1"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={med.name}
                    onChange={(e) =>
                      updateMedication(index, "name", e.target.value)
                    }
                  />
                  <select
                    className="form-control"
                    value={med.type}
                    onChange={(e) =>
                      updateMedication(index, "type", e.target.value)
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="Video call">Video call</option>
                    <option value="Direct Visit">Direct Visit</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dosage"
                    value={med.dosage}
                    onChange={(e) =>
                      updateMedication(index, "dosage", e.target.value)
                    }
                  />
                  <select
                    className="form-control"
                    value={med.duration}
                    onChange={(e) =>
                      updateMedication(index, "duration", e.target.value)
                    }
                  >
                    <option value="">Select Duration</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Instruction"
                    value={med.instruction}
                    onChange={(e) =>
                      updateMedication(index, "instruction", e.target.value)
                    }
                  />
                  <button
                    className="text-danger border-0 bg-transparent"
                    onClick={() => removeMedication(index)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* advice  */}

          <div className="mt-3">
            <h4
              className="pb-1"
              style={{ fontWeight: "600", fontSize: "18px" }}
            >
              Advice
            </h4>
            <textarea
              type="text"
              className="form-control"
              placeholder="Diagnosis"
              style={{ width: "100%" }}
              rows={3}
            />
          </div>

          {/* follow up */}

          <div className="mt-3">
            <h4
              className="pb-1"
              style={{ fontWeight: "600", fontSize: "18px" }}
            >
              Follow Up
            </h4>
            <textarea
              type="text"
              className="form-control"
              placeholder="Diagnosis"
              style={{ width: "100%" }}
              rows={3}
            />
          </div>
        </div>

        <div className="d-flex gap-2 align-items-center justify-content-end mt-3">
          <button className="c_btn">cancel</button>
          <button className="c_btn_primary">Save & End Appointement</button>
        </div>
      </div>}
    </div>
  );
};

export default AppointmentDetails;
