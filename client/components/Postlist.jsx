// To hold all posts
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../reducer/postsSlice'
import { Link } from 'react-router-dom'

import PostDetails from './PostDetails'

export default function PostList() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <>
            <section>
                <div>
                    This is the PostList component
                    <Link to='/createPost'>Add Post</Link>
                </div>
                {posts.map(post => {
                    <React.Fragment key={posts.id} >
                        <PostDetails
                            key={posts.id}
                            title={posts.title}
                            img={posts.img}
                            vid={posts.vid}
                            body={posts.body}
                            author={posts.author}
                            postDate={posts.postDate}
                        />
                    </React.Fragment>
                }).reverse()}



            </section>
        </>
    )
}
