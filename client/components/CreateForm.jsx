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

    // check this. item is whatever handleChange class is in?
    const handleChange = (e) => {
        const { item, value } = e.target
        setForm({
            ...form,
            [item]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitItem(form)
        history.push('/createmsg')

    }

    return (
        <>
            {/* maybe an icon here e.g. camera sketch icon with a plus sign */}
            <div>
                Add..
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id='title'
                        title='title'
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        id='body'
                        title='body'
                        type='text'
                        placeholder='Your text here'
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <button>
                    Publish
                </button>
            </form>

            <div>
                <Link to='/'>Cancel</Link>
            </div>
        </>
    )
}
