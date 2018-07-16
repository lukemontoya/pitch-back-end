
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cards",(table)=>{
    table.increments();
    table.string("material");
    table.string("object");
    table.text("issue");
    table.boolean("used").defaultTo("false");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cards");
};
