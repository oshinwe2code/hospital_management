import React from 'react';
import DeleteButton from '../../../common-element/action/DeleteButton';
import EditButton from '../../../common-element/action/EditButton';
import LinkButton from '../../../common-element/action/LinkButton';
import DownloadButton from '../../../common-element/action/DownloadButton';
import EditmedicalForm from './EditmedicalForm';
import DeleteButtonAction from '../../../common-element/DeleteButtonAction';
import "../../../Styles/patient/patientmain.css";
export default function PatientMedicalTable() {
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
                    <th>Name</th>
                    <th>Date</th>
                    <th>Record For</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a className="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#med-detail">#MD1</a>
                    </td>
                    <td>Hendit Clark</td>
                    <td>24/06/2024</td>
                    <td>
                      <h2 className="table-avatar" style={{ fontSize: "15px" }}>
                        <a href="patient-profile.html" className="avatar avatar-sm me-2">
                          <img src="../src/assets/profile-01.webp" alt="Avatar" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                        </a>
                        Hendrita 
                      </h2>
                    </td>
                    <td>Take Good rest</td>
                    <td>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <LinkButton />
                        {/* Wrapping the EditButton with modal trigger attributes */}
                        <div data-bs-toggle="modal" data-bs-target="#edit_medical_records">
                          <EditButton />
                        </div>
                        <DownloadButton />
                        <div data-bs-toggle="modal" data-bs-target="#delete_modal">
                          <DeleteButton />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#med-detail">#MD1</a>
                    </td>
                    <td>Hendit Clark</td>
                    <td>24/06/2024</td>
                    <td>
                      <h2 className="table-avatar" style={{ fontSize: "15px" }}>
                        <a href="patient-profile.html" className="avatar avatar-sm me-2">
                          <img src="../src/assets/profile-01.webp" alt="Avatar" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                        </a>
                        Hendrita 
                      </h2>
                    </td>
                    <td>Take Good rest</td>
                    <td>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <LinkButton />
                        {/* Wrapping the EditButton with modal trigger attributes */}
                        <div data-bs-toggle="modal" data-bs-target="#edit_medical_records">
                          <EditButton />
                        </div>
                        <DownloadButton />
                        <div data-bs-toggle="modal" data-bs-target="#delete_modal">
                          <DeleteButton />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
  <td>
    <a className="link-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#med-detail">#MD1</a>
  </td>
  <td>Hendit Clark</td>
  <td>24/06/2024</td>
  <td>
    {/* Flexbox to align avatar and text horizontally and vertically */}
    <div className="d-flex align-items-center" style={{ fontSize: "15px" }}>
      <a href="patient-profile.html" className="avatar avatar-sm me-2">
        <img
          src="../src/assets/profile-01.webp"
          alt="Avatar"
          className="rounded-circle"
          style={{ width: "40px", height: "40px" }}
        />
      </a>
      <span>Hendrita</span> {/* Replaced h2 with span for consistent alignment */}
    </div>
  </td>
  <td>Take Good rest</td>
  <td>
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap' }}>
      <LinkButton />
      <div data-bs-toggle="modal" data-bs-target="#edit_medical_records">
        <EditButton />
      </div>
      <DownloadButton />
      <div data-bs-toggle="modal" data-bs-target="#delete_modal">
        <DeleteButton />
      </div>
    </div>
  </td>
</tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EditmedicalForm/>
      <DeleteButtonAction/>
    </div>
  );
}
