import mysql from 'mysql2/promise'
const config = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'cadastro',
    port: 3306
}
const db = await mysql.createConnection(config);

if (db) console.log('MySQL conectado !')

export default db;