import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' // for routing
import { Link } from 'react-router-dom'
import { GrStatusGood } from 'react-icons/gr'

export default function CreateForm(props) {
    const history = useHistory()
    const [form, setForm] = useState({
        title: '',
        img: null,
        vid: '',
        body: '',
        author: '',
        postDate: ''
    })
    const { title, vid, body, author, postDate } = form

    const handleChange = (e) => {
        const { title, value } = e.target
        setForm({
            ...form,
            [title]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitItem(form)

    }

    return (
        <>
            <form>

            </form>
            <div>

                <Link to='/'>Cancel</Link>
            </div>
        </>
    )
}
