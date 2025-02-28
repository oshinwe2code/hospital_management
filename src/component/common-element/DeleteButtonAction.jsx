import React from 'react';

export default function DeleteButtonAction() {
  return (
    <div className="modal fade custom-modals" id="delete_modal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-4 text-center">
            <form action="medical-records.html">
              <span className="del-icon mb-2 mx-auto">
                <i className="isax isax-trash"></i>
              </span>
              <h3 className="mb-2">Delete Record</h3>
              <p className="mb-3">Are you sure you want to delete this record?</p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a href="#" className="btn btn-md btn-dark rounded-pill" data-bs-dismiss="modal">Cancel</a>
                <button type="submit" className="btn btn-md btn-primary-gradient rounded-pill btn-danger">Yes, Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
