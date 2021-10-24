const express = require('express')

const db = require('../db/posts') // the db folder functions, posts.js

const router = express.Router()

// GET all posts
router.get('/', (req, res) => {
    db.getPosts()
        .then(results => {
            res.json({ posts: results.map(post => post) })
            return null
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    title: 'Unable to get posts'
                }
            })
        })
})

// GET post by id 
router.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getPostById(id)
        .then((post) => {
            res.json(post[0])
            return null
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Unable to get individual post details' })
        })
})

// POST add new post
router.post('/createpost', (req, res) => {
    const { title, img, vid, body, author } = req.body
    const post = { title, img, vid, body, author }
    db.createPost(post)
        .then((id) => {
            res.status(201).json({ id })
            return null
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    title: 'Unable to add post'
                }
            })
        })
})

// DELETE by id
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