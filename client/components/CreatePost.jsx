import React from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../reducer/postsSlice'

import CreateForm from './CreateForm'

export default function CreatePost() {
    const dispatch = useDispatch()

    function submitItem(post) {
        dispatch(createPost(post))
    }

    return (
        <div>
            <CreateForm
                submitItem={submitItem}
            />
        </div>
    )
}
