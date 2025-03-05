// DeleteAccount.js
import React from 'react'
import WhyDeleteAccount from './WhyDeleteAccount'

export default function DeleteAccount() {
    return (
        <div className='col-lg-12'>

            <div className="border-gray rounded-1 mt-3 p-3">
                <h5 className="font-size-1 border-bottom border-gray pb-2">
                    <b>Delete Account</b>
                </h5>
                
                    <h6 className="fs-16"><b>Are you sure you want to delete your account?</b></h6>
                    <p>Refers to the action of permanently removing a user's account and associated data from a system, service, and platform.</p>
                    <br />
                    {/* Button to open the modal */}
                   
               
                <button className="btn btn-md btn-primary-gradient btn-primary" data-bs-toggle="modal" data-bs-target="#deleteAccountModal">
                        Delete Account
                    </button>
            </div>


            {/* Modal */}
            <div className="modal fade" id="deleteAccountModal" tabIndex="-1" aria-labelledby="deleteAccountModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ width: "800px" }}>
                    <div className="modal-content">
                        <WhyDeleteAccount />
                    </div>
                </div>
            </div>
        </div >

    )
}
