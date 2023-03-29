import React from 'react'
import { Link } from 'react-router-dom'

export default function AddProjectButton(props) {
    const text = props.text;
    return (
        <Link to='/user/new'>
            <button className='btn-add-project btn-hover'>
                {/* Add text='innerText' for this button component while calling */}
                {text}
            </button>
        </Link>
    )
}