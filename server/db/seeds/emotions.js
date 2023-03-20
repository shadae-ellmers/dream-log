/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('emotions').del()
  await knex('emotions').insert([
    {
      id: 1,
      feeling: 'none1',
    },
    {
      id: 2,
      feeling: 'none2',
    },
    {
      id: 3,
      feeling: 'none3',
    },
  ])
}
