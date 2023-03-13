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
      anxious: false,
      fear: false,
      surprise: false,
      sadness: false,
      lust: false,
      happiness: false,
      anger: false,
      shame: false,
    },
    {
      id: 2,
      anxious: false,
      fear: false,
      surprise: false,
      sadness: false,
      lust: false,
      happiness: false,
      anger: false,
      shame: false,
    },
    {
      id: 3,
      anxious: false,
      fear: false,
      surprise: false,
      sadness: false,
      lust: false,
      happiness: false,
      anger: false,
      shame: false,
    },
  ])
}
