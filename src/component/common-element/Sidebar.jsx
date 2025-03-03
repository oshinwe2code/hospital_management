// import  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import '../Styles/general/Sidebar.css';

const Sidebar = ({ links }) => {
  return (
    <div className="c_sidebar">
      <ul className="c_list">
        {links.map((link, index) => (
          <li key={index} className="c_links">
            {link.icon && <span className="me-2">{link.icon}</span>}
            <Link to={`/doctor/${link.path}`} className="text-decoration-none">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node, // icon is optional
    })
  ).isRequired,
};

export default Sidebar;
