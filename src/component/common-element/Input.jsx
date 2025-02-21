// import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label c_label">{props.label}</label>
            <input 
                type={props.type}
                className="form-control w-100"
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    value: ''
}

export default Input
