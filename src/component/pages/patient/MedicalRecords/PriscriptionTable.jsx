import React from 'react'

export default function PriscriptionTable() {
    return (
        <div class="tab-pane fade" id="prescription">
            <div class="dashboard-header border-0 m-0">
                <ul class="header-list-btns">
                    <li>
                        <div class="input-block dash-search-input">
                            <input type="text" class="form-control" placeholder="Search"/>
                                <span class="search-icon"><i class="isax isax-search-normal"></i></span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="custom-table">
                <div class="table-responsive">
                    <table class="table table-center mb-0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Created Date</th>
                                <th>Prescriped By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a class="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">#P1236</a></td>
                                <td>
                                    <a href="javascript:void(0);" class="lab-icon prescription">Prescription</a>
                                </td>
                                <td>24 Mar 2024, 10:30 AM</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm me-2">
                                            <img class="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                                        </a>
                                        <a href="doctor-profile.html">Edalin Hendry</a>
                                    </h2>
                                </td>
                                <td>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
                                            <i class="isax isax-link-2"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="isax isax-import"></i>
                                        </a>
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="isax isax-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a class="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">#P3656</a></td>
                                <td>
                                    <a href="javascript:void(0);" class="lab-icon prescription">
                                        Prescription
                                    </a>
                                </td>
                                <td>27 Mar 2024, 11:15 AM</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm me-2">
                                            {/* <img class="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"> */}
                                        </a>
                                        <a href="doctor-profile.html">John Homes</a>
                                    </h2>
                                </td>
                                <td>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
                                            <i class="isax isax-link-2"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="isax isax-import"></i>
                                        </a>
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="isax isax-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a class="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">#P1246</a></td>
                                <td>
                                    <a href="javascript:void(0);" class="lab-icon prescription">
                                        Prescription
                                    </a>
                                </td>
                                <td>11 Apr 2024, 09:00 AM</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm me-2">
                                            {/* <img class="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"> */}
                                        </a>
                                        <a href="doctor-profile.html">Shanta Neill</a>
                                    </h2>
                                </td>
                                <td>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
                                            <i class="isax isax-link-2"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="isax isax-import"></i>
                                        </a>
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="isax isax-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a class="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">#P6985</a></td>
                                <td>
                                    <a href="javascript:void(0);" class="lab-icon prescription">
                                        Prescription
                                    </a>
                                </td>
                                <td>15 Apr 2024, 02:30 PM</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm me-2">
                                            {/* <img class="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"> */}
                                        </a>
                                        <a href="doctor-profile.html">Anthony Tran</a>
                                    </h2>
                                </td>
                                <td>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
                                            <i class="isax isax-link-2"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="isax isax-import"></i>
                                        </a>
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="isax isax-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a class="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">#P3659</a></td>
                                <td>
                                    <a href="javascript:void(0);" class="lab-icon prescription">
                                        Prescription
                                    </a>
                                </td>
                                <td>23 Apr 2024, 06:40 PM</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="doctor-profile.html" class="avatar avatar-sm me-2">
                                            {/* <img class="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"> */}
                                        </a>
                                        <a href="doctor-profile.html">Susan Lingo</a>
                                    </h2>
                                </td>
                                <td>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
                                            <i class="isax isax-link-2"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="isax isax-import"></i>
                                        </a>
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="isax isax-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
