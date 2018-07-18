
exports.up = function(knex, Promise) {
  return knex.schema.createTable("rounds_game",(table)=>{
    table.increments();
    table.integer("rounds_id")
      .notNullable()
      .references('id')
      .inTable('rounds')
      .onDelete('CASCADE')
      .index();
    table.integer("game_id")
      .notNullable()
      .references('id')
      .inTable('game')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rounds_game");
};
