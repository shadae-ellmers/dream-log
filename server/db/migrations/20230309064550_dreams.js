/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dreams', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('themes')
    table.integer('date_day')
    table.integer('date_month')
    table.integer('date_year')
    table.string('stories')
    table.string('feeling')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dreams')
}
