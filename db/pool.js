/* const { Pool } = require("pg"); */
const pkg = require("pg");
// Create a new pool using your Neon database connection string
const { Pool } = pkg;

const myObject = {};
require('dotenv').config({ processEnv: myObject });

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL || myObject.DATABASE_URL
});

/* const myObject = {};
require('dotenv').config({ processEnv: myObject });
const port = 5432; */

/* const connectionString = `postgresql://${myObject.ROLE_NAME}:${myObject.PASSWORD}@${myObject.DB_HOST}:${port}/${myObject.DATABASE}?sslmode=require`;


 */
/* 
module.exports = new Pool({
  host: myObject.DB_HOST, 
  user: myObject.ROLE_NAME,
  database: myObject.DATABASE,
  password: myObject.PASSWORD,
  port: port,
  ssl: { require: true, rejectUnauthorized: false, },
});
 */
/* 
ssl: 'verify-full',
    sslrootcert: '/etc/ssl/certs/ca-certificates.crt',
*/