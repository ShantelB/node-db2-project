const knex = require("knex");

const knexfile = require("./knexfile");

const config = knexfile.development;

console.log("config", config);

module.exports = knex(config);

