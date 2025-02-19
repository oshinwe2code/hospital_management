// import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/react.svg";
const Sidebar = () => {
  return (
    <div className="container-fluid rounded-1 border border-primary py-4">
      <div className="row">
        <div className="d-flex flex-column align-items-center mt-4  bg-blue">
          <img
            src={img}
            alt="profile"
            className="rounded-circle w-50"
            style={{
              outline: "3px solid gray",
              boxShadow: "0px 0px 10px 3px white",
              padding: "5px",
              marginBottom: "10px",
            }}
          />
          <Link to="/" className="text-center pb-2 text-decoration-none"> Dr. John Doe</Link>
          <p className="text-center">BDS, MDS - Oral & Maxillofacial Surgery</p>
          <p className="text-center px-2 rounded-1 border border-primary">dentist</p>
        </div>
        {/* Sidebar */}
        <nav id="sidebar" className="">
          <div className="position-sticky">
            <h4 className="p-3">Sidebar</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
