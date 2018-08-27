import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: 'friend_finder'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.log('Error: ', err);
    connection.end();
  }
});

export default connection;
