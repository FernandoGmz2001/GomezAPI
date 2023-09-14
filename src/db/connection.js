import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234', 
  database: 'ApiDatabase',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

export const promisePool = pool.promise();

  