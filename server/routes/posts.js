const express = require('express')

const db = require('../db/posts') // the db folder functions, posts.js

const router = express.Router()

router.get('/', (req, res) => {
    db.getPosts()
        .then(results => {
            res.json({ posts: results.map(post => post) })
            return null
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    title: 'Unable to get posts!'
                }
            })
        })
})

router.get('/posts', (req, res) => {
    const id = req.body.id
    db.getPostById(post)
        .then(post => {
            res.json(item[0].id) // check .id
            return null
        })
        .catch((err => {
            res.status(500).json({ message: 'Unable to get post details' })
        }))
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    db.deletePost(id)
        .then(() => {
            res.status(202).json('Post was deleted successfully')
            return null
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to delete!' })
        })
})

module.exports = router