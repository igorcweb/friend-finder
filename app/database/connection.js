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

let connection;

// Heroku config
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(dbConfig);
}

connection.connect(err => {
  if (err) {
    console.log('Error: ', err);
    connection.end();
  }
});

export default connection;
