/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dreams').del()
  await knex('dreams').insert([
    {
      id: 1,
      title: 'thing',
      themes: 'thing',
      date_day: 1,
      date_month: 3,
      date_year: 2023,
      stories: 'thing',
    },
    {
      id: 2,
      title: 'thing',
      themes: 'thing',
      date_day: 2,
      date_month: 3,
      date_year: 2023,
      stories: 'thing',
    },
    {
      id: 3,
      title: 'thing',
      themes: 'thing',
      date_day: 3,
      date_month: 3,
      date_year: 2023,
      stories: 'thing',
    },
  ])
}
