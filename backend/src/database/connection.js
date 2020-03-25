const knex = require('knex');
const configuration = require('../../knexfile'); //Esses ../../ é porque saindo da pasta Migration e Database


const connection = knex(configuration.development);

module.exports = connection;