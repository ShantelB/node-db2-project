
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('vin', 255)
        .unique()
        .notNullable();

        tbl.string('make', 255)
        .notNullable();

        tbl.string('model', 255)
        .notNullable();

        tbl.integer('mileage', 7)
        .notNullable;

        tbl.string('transmission', 255)
        .notNullable();

        tbl.string('title', 255)
        .notNullable();  
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
