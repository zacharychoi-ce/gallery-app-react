exports.up = function (knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments('id')
        // table.integer('user_id').references(users.id) // for auth?
        table.string('title')
        table.string('img')
        table.string('vid') // video link
        table.string('body')
        table.string('author')
        table.string('postDate')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
}

// title
// body
// author
// 