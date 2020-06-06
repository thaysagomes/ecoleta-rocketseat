import Knex from 'knex'; //Knex com letra maiuscula para referenciar ao tipo

export async function up(knex: Knex) { //criar a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); //salvar apenas a referencia - o nome do arquivo da imagem
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
} 

export async function down(knex: Knex) { //desfaz o que criou no método up
   return knex.schema.dropTable('points');
}