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
    const booksJSON = JSON.parse(fs.readFileSync('./books.json', 'utf8'));

    const books = booksJSON.map(book => {
      const { title, author, released_date, pages, genre } = book;
      return {
        title,
        author,
        released_date: new Date(released_date),
        pages,
        genre,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    await queryInterface.bulkInsert('books', books, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface, bulkDelete('books', null, {});
  }
};
