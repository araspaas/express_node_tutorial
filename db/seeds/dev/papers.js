
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footnotes').del()
    .then(() => knex('papers').del())
    .then(() => {
      return knex('papers').insert({
        title: 'blah', author: 'Van', publisher: 'The Stuff and Thangs'
      }, 'id')
      .then(paper => {
        return knex('footnotes').insert([
          { note: 'Lorem', paper_id: paper[0] },
          { note: 'Dolor', paper_id: paper[0] }
        ])
      })
      .then(() => console.log('Seeding complete!'))
      .catch(error => console.log('Error seeding data: ${error}'))
    })
};
