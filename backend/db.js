
//CREATE CONNECTION WITH THE DATABASE
require('dotenv').config();
const sql = require('mssql');


const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    enableArithAbort: process.env.DB_ENABLE_ARITH_ABORT === 'true',
    trustServerCertificate: process.env.DB_TRUST_CERT === 'true'
  },
  port: parseInt(process.env.DB_PORT, 10) // ✅ ensures it's a number
};

  
// Create connection pool

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Connected to database');
    return pool;
  })
  .catch(err => {
    console.error('❌ Database connection failed: ', err);
    throw err;
  });

module.exports = {
  sql, poolPromise
};