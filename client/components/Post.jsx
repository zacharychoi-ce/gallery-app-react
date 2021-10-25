// Post component for PostList
import React from 'react'
import { Link } from 'react-router-dom' // for edit, or post details page

export default function Post(props) {
    const {
        // id,
        title,
        img,
        //vid,
        body,
        author,
        postDate } = props

    return (
        <>
            <section>
                <div>
                    <h3>{title}</h3>
                    <img src={img} alt={img} />
                    {/* if vid string > 0, show vid as hyperlink */}
                    {/* <p>{body}</p>
                    <p>Author: {author}</p> */}
                    <p>Post date: {postDate}</p>
                </div>
                <Link to={`/posts/${id}`}>Further info</Link>

            </section>
        </>
    )
}

