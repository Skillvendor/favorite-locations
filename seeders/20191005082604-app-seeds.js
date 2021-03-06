'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'Skill1',
        email: 'skill1@gmail.com',
        password: bcrypt.hashSync('123456', 5),
      },
      {
        name: 'Skill2',
        email: 'skill2@gmail.com',
        password: bcrypt.hashSync('123456', 5),
      }], {}).then(() => {
        return queryInterface.bulkInsert('Countries', [{
          name: 'Romania',
        },
        {
          name: 'Holland',
        }], {}).then(() => {
        return queryInterface.bulkInsert('Spots', [{
          name: 'Carpati',
          wind: 15.5,
          countryId: 1,
        },
        {
          name: 'Paduri',
          wind: 50.6,
          countryId: 1,
        },
        {
          name: 'Reyjkavisky',
          wind: 0.0,
          countryId: 2,
        },
        {
          name: 'Nowhere',
          wind: 20.5,
          countryId: null,
        }], {}).then(() => {
        return queryInterface.bulkInsert('Favorites', [{
          userId: 1,
          spotId: 2,
        }], {})})})});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Favorites', null, {}).then(() => {
      return queryInterface.bulkDelete('Spots', null, {}).then(() => {
        return queryInterface.bulkDelete('Countries', null, {}).then(() => {
          return queryInterface.bulkDelete('Users', null, {});
        })
      })
    })



  }
};
