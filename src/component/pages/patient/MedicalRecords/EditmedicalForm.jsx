import React from 'react'

export default function EditmedicalForm() {

    return (
        <div className="modal fade custom-modals" id="edit_medical_records">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Edit Medical Record</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <form>
                        <div className="modal-body pb-0">
                            <div className="row">
                                <div className="mb-3">
                                    <label className="col-form-label">Title</label>
                                    <input type="text" className="form-control" value="Glucose Test V12" />
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="col-form-label">Record For <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value="Hendrita Clark" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="col-form-label">Date <span className="text-danger">*</span></label>
                                        <div className="form-icon">
                                            <input type="text" className="form-control datetimepicker" value="23/04/2024" />
                                            <span className="icon"><i className="isax isax-calendar-1"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="col-form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea className="form-control" rows="3">Take Good Rest</textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="col-form-label">Record <span className="text-danger">*</span></label>
                                        <div>
                                            <div className="file-upload">
                                                <input type="file" />
                                                <p><i className="isax isax-document-upload me-1"></i>Upload File</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-btn text-end">
                                <a href="#" className="btn btn-md btn-dark rounded-pill" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>&nbsp;
                                <button type="submit" className="btn btn-md btn-primary-gradient rounded-pill btn-primary">Save Medical Records</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
