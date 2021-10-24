exports.seed = (knex) => {
  const todayDate = new Date().toLocaleDateString() // testing today's Date
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
        {
          id: 1,
          title: 'Plum Blossom',
          img: '/images/plum_blossom.png',
          vid: '',
          body: 'Plum Blossom, 2019, on Samsung Galaxy Note 9',
          author: 'Zachary Choi',
          postDate: '21/10/2021'
        },
        {
          id: 2,
          title: 'Prepped',
          img: '/images/ntruder_person1.png',
          vid: '',
          body: 'Dancer Sid prepped for stage, 2019, on Samsung Galaxy Note 9',
          author: 'Zachary Choi',
          postDate: '22/10/2021'
        }
      ])
    })
}
