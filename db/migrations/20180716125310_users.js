
exports.up = function(knex, Promise) {
  return knex.schema.createTable("players",(table)=>{
    table.increments();
    table.string("player_name");
    table.string("player_email").unique();
    table.string("password");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("players");
};
