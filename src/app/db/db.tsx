import mysql, { Connection } from 'mysql';

const connection: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'praktikumWeb'
})

connection.connect((err: Error | null) => {
    if (err) {
        console.error('Error connecting to mysql', err);
        return;
    }
    console.log('Connecting to mysql database')
})

export default connection;