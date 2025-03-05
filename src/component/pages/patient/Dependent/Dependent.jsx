import React, { useState } from 'react'
import Input from '../../../common-element/Input'
import EditButton from '../../../common-element/action/EditButton'
import DeleteButton from '../../../common-element/action/DeleteButton'
import dependentImage1 from "../../../../assets/dependent-01.webp"
import dependentImage2 from "../../../../assets/dependent-02.webp"
import dependentImage3 from "../../../../assets/dependent-03.webp"
import dependentImage4 from "../../../../assets/dependent-04.webp"
import AddDependent from './AddDependent'
import DeleteButtonAction from '../../../common-element/DeleteButtonAction'


export default function Dependent() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const dependentsData = [
        {
            name: 'Laura',
            relation: 'Mother',
            gender: 'Female',
            age: '58 years 20 days',
            bloodGroup: 'AB+ve',
            image: dependentImage1,
            status: true,
        },
        {
            name: 'Mathew',
            relation: 'Father',
            gender: 'Male',
            age: '59 years 15 days',
            bloodGroup: 'AB+ve',
            image: dependentImage2,
            status: true,
        },
        {
            name: 'Christopher',
            relation: 'Brother',
            gender: 'Male',
            age: '32 years 6 months',
            bloodGroup: 'A+ve',
            image: dependentImage3,
            status: true,
        },
        {
            name: 'Elisa',
            relation: 'Sister',
            gender: 'Female',
            age: '28 years 4 months',
            bloodGroup: 'B+ve',
            image: dependentImage4,
            status: false,
        },
    ]


    return (
        <div className='row p-3'>
            <div className="col-lg-12 col-xl-12 col-md-12 border border-gray rounded-3">
                <div className="dashboard-header"><br></br>
                    {/* Updated to align heading left and buttons right */}
                    <div className="d-flex justify-content-between align-items-center">
                        <h2><b>Dependents</b></h2>

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
                            data-bs-target="#add_dependent"  // Updated to match AddDependent modal ID
                        >
                            <b>Add Dependents</b>
                        </button>

                    </form>
                    <br />
                </div>


            </div>
            <AddDependent />
            {dependentsData.map((dependent, index) => (
                <div key={index} className="dependent-wrap d-flex align-items-center justify-content-between p-3 bg-white mb-3">
                    <div className="dependent-info d-flex align-items-center">
                        <div className="patinet-information">
                            <a href="patient-profile.html">
                                <img src={dependent.image} alt="User Image" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                            </a>
                        </div>
                        <div className="patient-info ms-3">
                            <div className="d-flex flex-column">
                                {/* Display Name and other info in a single flex row */}
                                <p className="mb-0"><b>{dependent.name}</b></p>
                                <div className="d-flex">
                                    <p className="mb-0 me-3">{dependent.relation}</p>
                                    <p className="mb-0 me-3">{dependent.gender}</p>
                                    <p className="mb-0">{dependent.age}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="blood-info text-center">
                        <p>Blood Group</p>
                        <h6><b>{dependent.bloodGroup}</b></h6>
                    </div>
                    <div className="dependent-status d-flex align-items-center">
                        <div className="status-toggle me-3">
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0);" className="edit-icon me-2" data-bs-toggle="modal" data-bs-target="#edit_dependent">
                            <EditButton />
                        </a>
                        <div data-bs-toggle="modal" data-bs-target="#delete_modal">
                            <DeleteButton />
                        </div>
                    </div>
                </div>
            ))}

<DeleteButtonAction />
        </div>
    )
}
