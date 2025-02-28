import React from 'react';
//import { FaEdit } from 'react-icons/fa';
//import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
export default function EditButton() {
    return (
        <button type="button" className="btn btn-light btn-sm"> {/* Light-colored button */}
            <MdOutlineEdit style={{ color: '#6c757d' }} /> {/* Light gray color for the icon */}
        </button>
    );
}
