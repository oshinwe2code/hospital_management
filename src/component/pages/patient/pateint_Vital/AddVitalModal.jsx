import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddVitalModal() {
    return (
        <div
            className="modal fade"
            id="addVitalModal"
            tabIndex="-1"
            aria-labelledby="addVitalModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addVitalModalLabel"><b>Add Vitals</b></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">BMI
                                <span class="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Heart Rate
                                <span class="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required />
                            </div>
                        </div>

                       
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Weight
                                <span class="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">FBC
                                <span class="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>

                       
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Date
                                <span class="text-danger">*</span>
                                </label>
                                <input type="date" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" style={{backgroundColor:"#0D6EFD"}}>Add Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
