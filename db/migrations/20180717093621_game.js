
exports.up = function(knex, Promise) {
  return knex.schema.createTable("game",(table)=>{
    table.increments();
    table.string("player_1");
    table.string("player_2");
    table.string("player_3");
    table.string("player_4");
    table.string("winner");
    table.integer("player_id")
      .notNullable()
      .references('id')
      .inTable('players')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("game");
};
