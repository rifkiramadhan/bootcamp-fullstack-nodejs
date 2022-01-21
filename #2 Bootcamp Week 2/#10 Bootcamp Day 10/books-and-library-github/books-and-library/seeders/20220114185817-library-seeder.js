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

    // Scope 1
    let authors = JSON.parse(fs.readFileSync('./seeders/author.json', 'utf8'));
    authors = authors.map(author => {
      const { name, age, image } = author;
      return { name, age, image, createdAt: new Date(), updatedAt: new Date() };
    });
    await queryInterface.bulkInsert('authors', authors, {});

    // Scope 2
    let books = JSON.parse(fs.readFileSync('./seeders/books.json', 'utf8'));
    books = books.map(books => {
      const { title, genre, page, price, image, authorId, released_date } = books;
      return { title, genre, page, price, image, authorId, released_date, createdAt: new Date(), updatedAt: new Date() };
    });
    await queryInterface.bulkInsert('books', books, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {});
  }
};
