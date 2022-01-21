'use strict';

const fs = require('fs');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   // Scope 1
   let ships = JSON.parse(fs.readFileSync('./seeders/ships.json', 'utf8'));
   ships = ships.map(ship => {
     const { name, type, power } = ship;
     return {  name, type, power, createdAt: new Date(), updatedAt: new Date() };
   });
   await queryInterface.bulkInsert('ships', ships, {});

   // Scope 1
   let pirates = JSON.parse(fs.readFileSync('./seeders/pirates.json', 'utf8'));
   pirates = pirates.map(pirate => {
     const { name, status, type } = pirate;
     return { name, status, type, createdAt: new Date(), updatedAt: new Date() };
   });
   await queryInterface.bulkInsert('pirates', pirates, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // Undo 1
    //  await queryInterface.bulkDelete('ships', null, {});
    
     // Undo 2
     await queryInterface.bulkDelete('pirates', null, {});
  }
};
