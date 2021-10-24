import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section>
            {/* insert, or change to icons */}
            <a href="https://github.com/zacharychoi-ce">Github</a>
            <a href="https://www.linkedin.com/in/zacharychoi/">LinkedIn</a>
            <Link to='/'>Go Back</Link>
        </section >
    )
}
