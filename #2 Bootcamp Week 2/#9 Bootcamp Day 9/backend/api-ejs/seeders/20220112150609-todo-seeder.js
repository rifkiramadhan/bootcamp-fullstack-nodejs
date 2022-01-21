'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let todos = JSON.parse(fs.readFileSync('./seeders/data.json', 'utf8'));

   todos = todos.map(todo => {
    const { task, status } = todo;
    return { task, status, createdAt: new Date(), updatedAt: new Date() };
   });
   
   await queryInterface.bulkInsert('todos', todos, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};
