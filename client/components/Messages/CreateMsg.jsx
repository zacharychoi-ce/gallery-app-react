import React from 'react'
import { Link } from 'react-router-dom'
// import { GrStatusGood } from 'react-icons/gr'

export default function CreateMsg() {
    return (
        <div>
            {/* add icon here */}
            <h3>Post was added successfully</h3>
            <Link to='/'>Home</Link>
        </div>
    )
}
