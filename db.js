const { Pool } = require ('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'biblioteca_api',
    password: 'postgres',
    port: '5432'
});

const createTables = async() => {
    const bookTable =
    'CREATE TABLE IF NOT EXISTS book (title TEXT, author TEXT, publisher TEXT, subject TEXT)';
    await pool.query(bookTable);

    const userTable =
    'CREATE TABLE IF NOT EXISTS user (license SERIAL_NUMBER, name TEXT, type TEXT)';
    await pool.query(userTable);
}

module.exports = {
    pool,
    createTables
};