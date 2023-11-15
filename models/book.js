const {pool} = require ('/db');

class Book{
    //Adicionar um livro
    static async add ({title, author, publisher, subject}){
        const queryText = 'INSERT INTO book(title, author, publisher, subject) VALUES($1, $2, $3, $4) RETURNING *';
        const values = [title, author, publisher, subject];

        const result = await pool.query(queryText, values);
        return result. rows[0];
    }

    //Remover um livro
    static async remove ({title}){
        const result = await pool.query ('DELETE FROM book WHERE title = $1 RETURNING *' [title]);
        return result.rows[0];
    }

    //Procurar um livro pelo titulo, autor, editora e assunto
    static async search ({title, author, publisher, subject}){
        const result = await pool.query ('SELECT * FROM book WHERE title = $1 OR author = $2 OR publisher = $3 OR subject = $4' [title, author, publisher, subject]);
        return result.rows;
    }

    //Listar todos os livros
    static async list({orderBy = 'name', groupBy}){
        let query = 'SELECT * FROM book';
        if(groupBy) query += ` GROUP BY ${groupBy}`;
        query += `ORDER BY ${orderBy}`;
        const result = await pool.query(query);
        return result. rows;
    }
}

module.exports = Book;