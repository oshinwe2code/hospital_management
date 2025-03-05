import React from 'react';
import './SocialMedia.css'; // Import custom CSS

export default function SocialMedia() {
    return (
        <div className='col-lg-12'>
            <div className="col-lg-12 col-xl-12">
                <div className="dashboard-header">
                    <h3 style={{ fontSize: "32px" }}>Social Media</h3><hr></hr>
                </div>
                <div className="add-btn text-end mb-4">
                    <a href="#" className="btn btn-primary prime-btn add-social-media">Add New Social Media</a>
                </div>
                <form action="social-media.html" className="social-media-form">
                    <div className="social-media-links d-flex align-items-center">
                        <div className="input-block input-block-new select-social-link">
                            <select className="custom-select">
                                <option selected>Facebook</option>
                                <option>Linkedin</option>
                                <option>Twitter</option>
                                <option>Instagram</option>
                            </select>
                        </div>&emsp;
                        <div className="input-block input-block-new flex-fill">
                            <input type="password" className="form-control" placeholder="Add Url"/>
                        </div>
                    </div><br></br>
                    <div className="social-media-links d-flex align-items-center">
                        <div className="input-block input-block-new select-social-link">
                            <select className="custom-select">
                                <option>Facebook</option>
                                <option>Linkedin</option>
                                <option selected>Twitter</option>
                                <option>Instagram</option>
                            </select>
                        </div>&emsp;
                        <div className="input-block input-block-new flex-fill">
                            <input type="password" className="form-control" placeholder="Add Url"/>
                        </div>
                    </div><br></br>
                    <div className="social-media-links d-flex align-items-center">
                        <div className="input-block input-block-new select-social-link">
                            <select className="custom-select">
                                <option>Facebook</option>
                                <option selected>Linkedin</option>
                                <option>Twitter</option>
                                <option>Instagram</option>
                            </select>
                        </div>&emsp;
                        <div className="input-block input-block-new flex-fill">
                            <input type="password" className="form-control" placeholder="Add Url"/>
                        </div>
                    </div><br></br>
                    <div className="social-media-links d-flex align-items-center">
                        <div className="input-block input-block-new select-social-link">
                            <select className="custom-select">
                                <option>Facebook</option>
                                <option>Linkedin</option>
                                <option>Twitter</option>
                                <option selected>Instagram</option>
                            </select>
                        </div>&emsp;
                        <div className="input-block input-block-new flex-fill">
                            <input type="password" className="form-control" placeholder="Add Url"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
