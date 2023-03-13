/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('emotions', function (table) {
    table.increments('id').primary()
    table.boolean('anxious')
    table.boolean('fear')
    table.boolean('surprise')
    table.boolean('sadness')
    table.boolean('lust')
    table.boolean('happiness')
    table.boolean('anger')
    table.boolean('shame')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('emotions')
}
