
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { material: 'wood', object: 'pyramid', issue: 'Running mascara'},
        { material: 'rubber', object: 'paricle board', issue: 'Locked door'},
        { material: 'stone', object: 'egg crates', issue: 'Low-energy, low-cost, scalable, desalination'},
        { material: 'iron', object: 'broom', issue: 'A better way to sell a home'},
        { material: 'coffee beans', object: 'table', issue: 'Teach me something important that I need to know to be a functioning adult'},
        { material: 'legos', object: 'cart', issue: 'A way to understand people outside your socioeconomic group'},
        { material: 'glass', object: 'house', issue: 'Civic engagement tools to hold politicians accountable'},
        { material: 'silk', object: 'maracas', issue: 'Next-gen children’s toys'},
        { material: 'sugar', object: 'striped shirts', issue: 'Quiet lawn blower'},
        { material: 'cotton', object: 'door', issue: 'Improved car sun visor'},
        { material: 'leather', object: 'sandwich', issue: 'nexpensive, comfortable and durable mattress'},
        { material: 'steel', object: 'drums', issue: 'More efficient home insulation'}
      ]);
    });
};
