// WhyDeleteAccount.js
import React from 'react'

export default function WhyDeleteAccount() {
    return (
        <div>
             <div class="modal-header">
                        <h5><b>Delete Account</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
            <form action="login.html">
                <div className="modal-body">
                    <h6 className="FS-16 mb-1"><b>Why Are You Deleting Your Account?</b></h6>
                   <br></br> <p className="mb-3">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
                    <div className="form-check d-flex mb-3">
                        <input className="form-check-input" type="radio" name="delete" id="del-acc1"/>
                            <label className="form-check-label fs-14 ms-2" htmlFor="del-acc1">
                                <span className="text-gray-9 fw-medium">No longer using the service</span>
                                <span className="d-block">I no longer need this service and won’t be using it in the future.</span>
                            </label>
                    </div>
                    <div className="form-check d-flex mb-3">
                        <input className="form-check-input" type="radio" name="delete" id="del-acc2"/>
                            <label className="form-check-label fs-14 ms-2" htmlFor="del-acc2">
                                <span className="text-gray-9 fw-medium">Privacy concerns</span>
                                <span className="d-block">I am concerned about how my data is handled and want to remove my information.</span>
                            </label>
                    </div>
                    <div className="form-check d-flex mb-3">
                        <input className="form-check-input" type="radio" name="delete" id="del-acc3"/>
                            <label className="form-check-label fs-14 ms-2" htmlFor="del-acc3">
                                <span className="text-gray-9 fw-medium">Too many notifications/emails</span>
                                <span className="d-block">I am overwhelmed by the volume of notifications or emails and would like to reduce them.</span>
                            </label>
                    </div>
                    <div className="form-check d-flex mb-3">
                        <input className="form-check-input" type="radio" name="delete" id="del-acc4"/>
                            <label className="form-check-label fs-14 ms-2" htmlFor="del-acc4">
                                <span className="text-gray-9 fw-medium">Poor user experience</span>
                                <span className="d-block">I ve had difficulty using the platform, and it didn’t meet my expectations.</span>
                            </label>
                    </div>
                    <div className="form-check d-flex mb-3">
                        <input className="form-check-input" type="radio" name="delete" id="del-acc5" defaultChecked/>
                            <label className="form-check-label fs-14 ms-2" htmlFor="del-acc5">
                                <span className="text-gray-9 fw-medium">Other (Please specify)</span>
                            </label>
                    </div>
                    <div className="ms-4">
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="modal-btn text-end">
                        <a href="#" className="btn btn-md btn-dark " data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>&nbsp;
                        <button type="submit" className="btn btn-md btn-primary-gradient btn-primary">Delete Account</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
