// To hold all posts
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../reducer/postsSlice'
import { Link } from 'react-router-dom'

import Post from './Post'

export default function PostList() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <section>
            <div>
                This is the PostList component
                <Link to='/createpost'>Create Post</Link>
            </div>
            {posts.map((post) => (
                //React.Fragment key line for Post.jsx's `/posts/${id} to work
                <React.Fragment key={post.id} >
                    <Post
                        id={post.id}
                        title={post.title}
                        img={post.img}
                        vid={post.vid}
                        body={post.body}
                        author={post.author}
                        postDate={post.postDate}
                    />
                </React.Fragment>
            ))}
        </section>
    )
}
