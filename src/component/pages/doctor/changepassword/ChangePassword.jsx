import React from 'react';

export default function ChangePassword() {
    return (
        <div className='col-lg-12'>
            <div className="border-gray rounded-1 mt-3 p-3">
                <h5 className="font-size-1 border-bottom border-gray pb-2">
                    <b>Change Password</b>
                </h5>
                <form action="doctor-change-password.html" >
                    <div className="card pass-card" style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6" >
                                    <div className="input-block input-block-new">
                                        <label className="form-label">Old Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="input-block input-block-new">
                                        <label className="form-label">New Password</label>
                                        <div className="pass-group">
                                            <input type="password" className="form-control pass-input" />
                                            <span className="feather-eye-off toggle-password"></span>
                                        </div>
                                    </div>
                                    <div className="input-block input-block-new mb-0">
                                        <label className="form-label">Confirm Password</label>
                                        <div className="pass-group">
                                            <input type="password" className="form-control pass-input-sub" />
                                            <span className="feather-eye-off toggle-password-sub"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-set-button" style={{
                        marginLeft: "580px",

                    }}>
                        <button className="btn btn-light" type="button">Cancel</button>&nbsp;
                        <button className="btn btn-primary" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
