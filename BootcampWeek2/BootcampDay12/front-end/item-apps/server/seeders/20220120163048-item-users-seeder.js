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
   let item = JSON.parse(fs.readFileSync('./seeders/item.json', 'utf8'));
   item = item.map(item => {
     const { name, type, image, price, stock, userId } = item;
     return {  name, type, image, price, stock, userId, createdAt: new Date(), updatedAt: new Date() };
   });
   await queryInterface.bulkInsert('items', item, {});

   // Scope 1
   let user = JSON.parse(fs.readFileSync('./seeders/user.json', 'utf8'));
   user = user.map(user => {
     const { email, password, avatar, username, role } = user;
     return { email, password, avatar, username, role, createdAt: new Date(), updatedAt: new Date() };
   });
   await queryInterface.bulkInsert('users', user, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // Undo 1
    await queryInterface.bulkDelete('item', null, {});

    // Undo 2
    // await queryInterface.bulkDelete('user', null, {});
  }
};
