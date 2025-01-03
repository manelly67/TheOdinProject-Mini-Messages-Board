const { Pool } = require("pg");

const myObject = {};
require('dotenv').config({ processEnv: myObject });
const port = process.env.PORT || 5432;

/* const connectionString = `postgresql://${myObject.ROLE_NAME}:${myObject.PASSWORD}@${myObject.DB_HOST}:${port}/${myObject.DATABASE}?sslmode=require`;

module.exports = new Pool({
  connectionString: connectionString,
});
 */
module.exports = new Pool({
  host: myObject.DB_HOST, 
  user: myObject.ROLE_NAME,
  database: myObject.DATABASE,
  password: myObject.PASSWORD,
  port: port,
  ssl: {
    require: true,
    },
});

/* 
ssl: 'verify-full',
    sslrootcert: '/etc/ssl/certs/ca-certificates.crt',
*/