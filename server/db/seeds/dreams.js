/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, title: 'rowValue1', themes: 'thing', date_day: 0, date_mon },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ])
}
