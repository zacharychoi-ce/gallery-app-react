import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section>
            <h1>Inspired by gallery: <a href="https://itmaybeis.tumblr.com">itmaybe-itis</a></h1>
            <Link to='/'>Go Back</Link>
        </section>
    )
}
