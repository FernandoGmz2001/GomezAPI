import mysql from 'mysql2'
const sqlConfig = {
  user: 'fer-user',
  password: '1234',
  database: 'Banco',
  server: 'DESKTOP-4MPA326/MSSQLSERVER01',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

// sql.connect(sqlConfig);

export async function connectDb (){
    try {
        const pool = await mysql.CreateConnection(sqlConfig)
        return pool
    } catch (error) {
        console.log(error);
    }
}

connectDb()