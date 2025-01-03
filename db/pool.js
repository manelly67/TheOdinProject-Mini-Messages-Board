const { Pool } = require("pg");

const myObject = {};
require('dotenv').config({ processEnv: myObject });

const connectionString = `postgresql://${myObject.ROLE_NAME}:${myObject.PASSWORD}@${myObject.DB_HOST}/${myObject.DATABASE}?sslmode=require`;

module.exports = new Pool({
  connectionString: connectionString,
});

/* module.exports = new Pool({
  host: myObject.DB_HOST, 
  user: myObject.ROLE_NAME,
  database: myObject.DATABASE,
  password: myObject.PASSWORD,
  port: process.env.PORT || myObject.DB_PORT,
  ssl: {
    require: true,
    },
}); */

/* 
ssl: 'verify-full',
    sslrootcert: '/etc/ssl/certs/ca-certificates.crt',
*/