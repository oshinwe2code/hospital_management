// import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import img from "../../../../assets/profile-01.webp";
import { CiCalendar, CiLocationArrow1 } from "react-icons/ci";
const PatientCard = () => {
    return (
        <div>
            <div className=" shadow-lg border border-gray rounded-3 px-3 align-items-center " style={{ minWidth: "250px" }}>
                <div className="d-flex align-items-center">
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
                        <div className="d-flex gap-2">
                            <span className="pe-2 text-muted border-end border-gray">Age: 25</span>
                            <span className="pe-2 text-muted border-end border-gray">Male</span>
                            <span className="text-muted">AB+</span>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-2 border-bottom border-gray">
                    <div className="d-flex gap-2  align-items-center">
                        <FaRegClock />
                        <span>10:00 AM</span>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <CiLocationArrow1 />
                        <span>Alabama , USA</span>
                    </div>

                </div>
                <div className="d-flex gap-2 align-items-center my-2">
                    <span><CiCalendar /></span>
                    <span>Last Booking</span>
                    <span>24 Feb 2025</span>
                </div>
            </div>
        </div>
    );
};

export default PatientCard;
