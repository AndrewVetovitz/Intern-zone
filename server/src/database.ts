import mysql from 'mysql';
import dotenv from 'dotenv';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default db;
