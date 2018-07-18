
exports.up = function(knex, Promise) {
  return knex.schema.createTable("rounds",(table)=>{
    table.increments();
    table.string("player_1");
    table.string("player_2");
    table.string("player_3");
    table.string("player_4");
    table.string("winner");
    table.string("judge");
    table.integer("game_id")
      .notNullable()
      .references('id')
      .inTable('game')
      .onDelete('CASCADE')
      .index();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rounds");
};
