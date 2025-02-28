import { useState } from "react";
import logo from "../../../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; 
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About Us", path: "/about" },
    {
      id: 3,
      link: "Doctors",
      subLinks: [
        { id: 1, link: "Doctor Profile", path: "/doctor" },
        { id: 2, link: "Doctor Dashboard", path: "/doctor-dashboard" },
         { id: 3, link: "Login", path: "/doctorlogin" },
      ],
    },
    {
      id: 4,
      link: "Patients",
      subLinks: [
        { id: 1, link: "Patient Profile", path: "/patient" },
        { id: 2, link: "Patient Dashboard", path: "/vital" },
        { id: 3, link: "patient register", path: "/patientregister" },
        { id: 4, link: "login", path: "/patientlogin" },
        {
          id: 5,
          link: "Select Doctor",
          subLinks: [
            { id: 1, link: "Select Doctor", path: "/select-doctor" },
            { id: 2, link: "Book Appointment", path: "/book-appointment" },
          ],
        },
      ],
    },
    { id: 6, link: "Contact Us", path: "/contact" },
    
  ];

  const toggleMenu = () => {
    setActive(!active);
    setActiveSubmenu(null);
    setActiveNestedSubmenu(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  position-sticky top-0 z-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${active ? "show" : ""}`}>
          <ul className="navbar-nav custom-nav">
            {links.map(({ id, link, path, subLinks }) => (
              <li
                key={id}
                className={`nav-item ${subLinks ? "dropdown custom-dropdown" : ""}`}
                onMouseEnter={() => subLinks && setActiveSubmenu(id)}
                onMouseLeave={() => subLinks && setActiveSubmenu(null)}
              >
                {subLinks ? (
                  <span className="nav-link dropdown-toggle ">{link}</span>
                ) : (
                  <Link className="nav-link" to={path} onClick={toggleMenu}>
                    {link}
                  </Link>
                )}
                {subLinks && (
                  <ul className={`dropdown-menu align-items-start custom-dropdown-menu ${activeSubmenu === id ? "show" : ""}`}>
                    {subLinks.map(({ id: subId, link: subLink, path: subPath, subLinks: nestedSubLinks }) => (
                      <li
                        key={subId}
                        className={`dropdown-item  ${nestedSubLinks ? "dropdown custom-nested-dropdown" : ""}`}
                        onMouseEnter={() => nestedSubLinks && setActiveNestedSubmenu(subId)}
                        onMouseLeave={() => nestedSubLinks && setActiveNestedSubmenu(null)}
                      >
                        {nestedSubLinks ? (
                          <>
                            <span className="dropdown-toggle pl-8">{subLink}</span>
                            <ul className={`dropdown-menu custom-nested-dropdown-menu ${activeNestedSubmenu === subId ? "show" : ""}`}>
                              {nestedSubLinks.map(({ id: nestedId, link: nestedLink, path: nestedPath }) => (
                                <li key={nestedId}>
                                  <Link className="dropdown-item" to={nestedPath} onClick={toggleMenu}>
                                    {nestedLink}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link className="dropdown-item" to={subPath} onClick={toggleMenu}>
                            {subLink}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
