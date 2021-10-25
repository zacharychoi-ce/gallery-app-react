import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost } from '../reducer/postsSlice'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'

export default function PostDetails() {
    const history = useHistory()
    const { id } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const singlePost = posts.find(post => post.id === Number(id))

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const handleDelete = (postId) => {
        dispatch(deletePost({ id: postId }))
        history.push('/deletemsg')
    }

    return (
        <div>
            <div>
                <h1>This is the PostDetails component</h1>
            </div>
            <section>
                <Link to={'/'}>Home</Link>
                <img src={singlePost?.img} alt={singlePost?.img}
                />
                <article>
                    <h2>{singlePost?.title}</h2>
                    <h1>Description: {singlePost?.body}</h1>
                    <h1>Author: {singlePost?.author}</h1>
                    <h1>Post date: {singlePost?.postDate}</h1>
                    <button onClick={() => handleDelete(singlePost?.id)}>
                        Delete post
                    </button>
                </article>
            </section>
        </div>
    )
}
