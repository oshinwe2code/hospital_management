import React from 'react';
//import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
export default function DeleteButton() {
    return (
        <button type="button" className="btn btn-light btn-sm me-2"> {/* Light-colored button */}
            <AiOutlineDelete />
        </button>
    );
}
