import React, { useState } from 'react';

export default function AddMedicalRecords() {
  const [formData, setFormData] = useState({
    title: '',
    recordFor: '',//record related data insert
    date: '',
    comments: '',
    recordFile: null,
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.recordFor.trim()) {
      newErrors.recordFor = 'Record For is required';
    }
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }
    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    }
    if (!formData.recordFile) {
      newErrors.recordFile = 'File is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      alert("form submitted")
    }
  };

  return (
    <div className="modal fade custom-modals" id="add_medical_records">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Add Medical Record</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body pb-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="col-form-label">Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                    {errors.title && <p className="text-danger">{errors.title}</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="col-form-label">Record For <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="recordFor" value={formData.recordFor} onChange={handleChange} />
                    {errors.recordFor && <p className="text-danger">{errors.recordFor}</p>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="col-form-label">Date <span className="text-danger">*</span></label>
                    <div className="form-icon">
                      <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                      <span className="icon"><i className="isax isax-calendar-1"></i></span>
                    </div>
                    {errors.date && <p className="text-danger">{errors.date}</p>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="col-form-label">Comments <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows="3" name="comments" value={formData.comments} onChange={handleChange}></textarea>
                    {errors.comments && <p className="text-danger">{errors.comments}</p>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="col-form-label">Record <span className="text-danger">*</span></label>
                    <div>
                      <div className="file-upload">
                        <input type="file" name="recordFile" onChange={handleChange} />
                        <p><i className="isax isax-document-upload me-1"></i>Upload File</p>
                      </div>
                      {errors.recordFile && <p className="text-danger">{errors.recordFile}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-btn text-end">
                <a href="#" className="btn btn-md btn-dark" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>&nbsp;
                <button type="submit" className="btn btn-md btn-primary-gradient btn-primary">Add Medical Records</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
