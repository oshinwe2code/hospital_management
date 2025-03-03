// import React from 'react'
import { FaCheck, FaRegClock } from "react-icons/fa";
import img from "../../../assets/profile-01.webp";
import { CiVideoOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { LuCalendarCheck } from "react-icons/lu";
import { useState } from "react";
// Import React Bootstrap components instead of plain Bootstrap
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router";
import { MdCancel } from "react-icons/md";

const Request = () => {
  // State for controlling modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Functions to handle modal open/close
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleCancelClose = () => setShowCancelModal(false);
  const handleCancelShow = () => setShowCancelModal(true);

  return (
    <div>
      <h4 className="border-bottom border-gray mt-1 pb-4">Request</h4>

      {/* First appointment request */}
      <ul className="row border border-gray rounded-3 p-4 m-0 mt-4 align-items-center">
        <li className="col d-flex align-items-center">
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
        <li className="col d-flex flex-column align-items-start">
          <span className="text-muted " style={{ fontSize: "14px" }}>
            <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
          </span>
          <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
            <p className="p-0">General Visit</p>
            <p className="p-0">Video Call</p>
          </div>
        </li>
        <li className="col d-flex flex-column align-items-start">
          <span>Types of Appointment</span>
          <span>
            <CiVideoOn className="me-2" /> Video Call
          </span>
        </li>
        <li className="col d-flex justify-content-center gap-4 pt-2 bg-white">
          <button
            className="bg-transparent border-0 text-success"
            onClick={handleShow}
          >
            <FaCheck fontSize={15} /> Accept
          </button>
          <button
            className="bg-transparent border-0 text-danger"
            onClick={handleCancelShow}
          >
            <RxCross2 fontSize={15} /> Reject
          </button>
        </li>
      </ul>

      {/* Second appointment request */}
      <ul className="row border border-gray rounded-3 p-4 m-0 mt-4 align-items-center">
        {/* Content same as above */}
        <li className="col d-flex align-items-center">
          <img
            src={img}
            alt="profile photo"
            className="rounded-3 me-2"
            width="50px"
          />
          <div className="d-flex flex-column mt-2">
            <span className="text-primary font-weight-700">#Apt-002</span>
            <p className="font-weight-bold">
              <b>Adrian</b>
            </p>
          </div>
        </li>
        <li className="col d-flex flex-column align-items-start">
          <span className="text-muted " style={{ fontSize: "14px" }}>
            <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
          </span>
          <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
            <p className="p-0">General Visit</p>
            <p className="p-0">Video Call</p>
          </div>
        </li>
        <li className="col d-flex flex-column align-items-start">
          <span>Types of Appointment</span>
          <span>
            <CiVideoOn className="me-2" /> Video Call
          </span>
        </li>
        <li
          className="col d-flex justify-content-center gap-4 pt-2 bg-white"
          onClick={handleCancelShow}
        >
          <button
            className="bg-transparent border-0 text-success"
            onClick={handleShow}
          >
            <FaCheck fontSize={15} /> Accept
          </button>
          <button className="bg-transparent border-0 text-danger">
            <RxCross2 fontSize={15} /> Reject
          </button>
        </li>
      </ul>

      {/* Third appointment request */}
      <ul className="row border border-gray rounded-3 p-4 m-0 mt-4 align-items-center">
        {/* Content same as above */}
        <li className="col d-flex align-items-center">
          <img
            src={img}
            alt="profile photo"
            className="rounded-3 me-2"
            width="50px"
          />
          <div className="d-flex flex-column mt-2">
            <span className="text-primary font-weight-700">#Apt-003</span>
            <p className="font-weight-bold">
              <b>Adrian</b>
            </p>
          </div>
        </li>
        <li className="col d-flex flex-column align-items-start">
          <span className="text-muted " style={{ fontSize: "14px" }}>
            <FaRegClock className="me-2" /> 24 Feb 2025 - 10:00 AM
          </span>
          <div className="d-flex gap-3" style={{ fontWeight: "600" }}>
            <p className="p-0">General Visit</p>
            <p className="p-0">Video Call</p>
          </div>
        </li>
        <li className="col d-flex flex-column align-items-start">
          <span>Types of Appointment</span>
          <span>
            <CiVideoOn className="me-2" /> Video Call
          </span>
        </li>
        <li className="col d-flex justify-content-center gap-4 pt-2 bg-white">
          <button
            className="bg-transparent border-0 text-success"
            onClick={handleShow}
          >
            <FaCheck fontSize={15} /> Accept
          </button>
          <button
            className="bg-transparent border-0 text-danger"
            onClick={handleCancelShow}
          >
            <RxCross2 fontSize={15} /> Reject
          </button>
        </li>
      </ul>

      {/* Modal implementation with React Bootstrap */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Request</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="d-flex justify-content-center mb-3">
            <div
              className="p-3 rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px" }}
            >
              <LuCalendarCheck className="text-white" size={24} />
            </div>
          </div>
          <h4> Appointment Accepted</h4>
          <p className="text-muted">
            Your Appointment has been scheduled on 24 Feb 2025 - 10:00 AM
          </p>

          <Link to="/doctor/appointments">
            <button className="btn btn-primary mt-3">Go to Appointments</button>
          </Link>
        </Modal.Body>
      </Modal>

      {/* Cancel/Reject Modal with Reason Field */}
      <Modal
        show={showCancelModal}
        onHide={handleCancelClose}
        centered
        className="p-4"
      >
        <Modal.Header closeButton>
          <Modal.Title className="">Reject Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center mb-3">
              <div
                className="p-3 rounded-circle bg-danger d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                <MdCancel className="text-white" size={24} />
              </div>
            </div>
            <h4>Are you sure</h4>
            <p className="text-muted text-center">
              Do you want to Cancel Appointment
            </p>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Cancel Reason <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <div>
                <Form.Check
                  type="radio"
                  label="Cancel with Reschedule"
                  name="rejectionReason"
                  id="reason1"
                />
                <Form.Check
                  type="radio"
                  label="Cancel with Request Refund"
                  name="rejectionReason"
                  id="reason2"
                />
              </div>
            </Form.Group>
          </Form>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger" onClick={handleCancelClose}>
              I have changed my mind

              
            </button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Request;
