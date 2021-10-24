// db functions, to check

const connection = require('./connection')

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost
    // editPost
}

function getPosts(db = connection) {
    return db('posts')
        .select()
}

function getPostById(id, db = connection) {
    return db('posts')
        .where('id', id)
        .select()
}

// will need to modify after auth/user
function createPost(newPost, db = connection) {
    const timestamp = Date.now()
    const postDate = timestamp.toDateString()
    const { title, img, vid, body, author, postDate } = newPost
    return db('posts')
        .insert({
            title,
            img,
            vid,
            body,
            author,
            postDate
        })

}

function deletePost(id, db = connection) {
    return db('items')
        .where('id', id)
        .delete()
}