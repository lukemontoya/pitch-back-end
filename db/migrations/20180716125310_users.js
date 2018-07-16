
exports.up = function(knex, Promise) {
  return knex.schema.createTable("agents",(table)=>{
    table.increments();
    table.string("player_name");
    table.integer("wins").defaultTo(0);
    table.boolean("judge").defaultTo("false");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appointments");
};
