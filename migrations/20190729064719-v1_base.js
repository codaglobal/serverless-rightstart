'use strict';

var fs = require('fs');
var Promise = require('bluebird');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.resolve().then(()=>{
      return fs.readFileSync(__dirname + '/../sql/base.sql', 'utf-8');
    }).then((sql)=>{
      return queryInterface.sequelize.query(sql);
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
