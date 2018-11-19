import mysql from 'mysql';
import * as createQuery from './tables';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export function initalize(callback?: (err: mysql.MysqlError, ...args: any[]) => void): void {
    db.query('CREATE DATABASE IF NOT EXISTS zintern', (err: mysql.MysqlError) => {
        if (err) {
            callback(err);
            return;
        }

        db.query('USE zintern', (err: mysql.MysqlError) => {
            if (err) {
                callback(err);
                return;
            }

            db.query(createQuery.createCompanyTableQuery, (err: mysql.MysqlError) => {
                if (err) {
                    callback(err);
                    return;
                }
            });
        });
    });
}

export default db;
