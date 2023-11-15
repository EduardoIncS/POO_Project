const {pool} = require ('/db');

class Book{
    //Adicionar um usuário
    static async add ({license, name, type}){
        const queryText = 'INSERT INTO user(license, name, type) VALUES($1, $2, $3) RETURNING *';
        const values = [license, name, type];

        const result = await pool.query(queryText, values);
        return result. rows[0];
    }

    //Remover um usuário
    static async remove ({license}){
        const result = await pool.query ('DELETE FROM book WHERE license = $1 RETURNING *' [license]);
        return result.rows[0];
    }

    //Procurar um usuário pela matricula, nome, tipo
    static async search ({license, name, type}){
        const result = await pool.query ('SELECT * FROM book WHERE license = $1 OR name = $2 OR type = $3' [license, name, type]);
        return result.rows;
    }

    //Listar todos os usuários
    static async list({orderBy = 'license', groupBy}){
        let query = 'SELECT * FROM user';
        if(groupBy) query += ` GROUP BY ${groupBy}`;
        query += `ORDER BY ${orderBy}`;
        const result = await pool.query(query);
        return result. rows;
    }
}

module.exports = User;