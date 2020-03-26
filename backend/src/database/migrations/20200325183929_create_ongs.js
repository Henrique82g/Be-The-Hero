exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};


/**
 * O metódo up é responsável pela criação da tabela.
 */

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};

/**
 * O metódo down serve para voltar atrás da criação de tabelas
 */
