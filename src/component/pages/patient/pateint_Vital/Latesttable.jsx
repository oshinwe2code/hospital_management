import React from 'react';
import DeleteButton from '../../../common-element/action/DeleteButton';
import EditButton from '../../../common-element/action/EditButton';
import DeleteButtonAction from '../../../common-element/DeleteButtonAction';

export default function Latesttable() {
    return (
        <div className="container p-1"> {/* Added padding to the container */}
            <div className="row">
                <div className="col-md-12">
                    <div className="custom-table border border-gray rounded-3">
                        <div className="table-responsive">
                            <table className="table table-center mb-0 p-1" style={{ width: '100%' }}> {/* Ensured table width is 100% */}
                                <thead>
                                    <tr style={{ backgroundColor: "#E3E6EC" }}>
                                        <th>ID</th>
                                        <th>Patient Name</th>
                                        <th>BMI</th>
                                        <th>Heart Rate</th>
                                        <th>FBC Status</th>
                                        <th>Weight</th>
                                        <th>Added on</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a className="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#med-detail">#MD1</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar" style={{ fontSize: "15px" }}>
                                                <a href="patient-profile.html" className="avatar avatar-sm me-2">
                                                    <img src="../src/assets/profile-01.webp" alt="Avatar" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                                </a>
                                                Hendrita 
                                            </h2>
                                        </td>
                                        <td>23.5</td>
                                        <td>89</td>
                                        <td>140</td>
                                        <td>74Kg</td>
                                        <td>22 Mar 2024</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                               <div data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                                         <DeleteButton />
                                                                       </div>
                                                <EditButton />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteButtonAction/>
        </div>
    );
}
