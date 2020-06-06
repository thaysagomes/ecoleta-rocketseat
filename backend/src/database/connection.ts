import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // variável global que retorna o diretorio do arquivo que estiver utilizando E o arquivo que vai ser criado
    },
    useNullAsDefault: true,
});

export default connection;