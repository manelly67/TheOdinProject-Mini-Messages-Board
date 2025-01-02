const { Pool } = require("pg");

const myObject = {};
require('dotenv').config({ processEnv: myObject });

if (myObject.NODE_ENV ='production'){

  module.exports = new Pool({
    host: myObject.DB_HOST, 
    user: myObject.ROLE_NAME,
    database: myObject.DATABASE,
    password: myObject.PASSWORD,
    port: myObject.DB_PORT,
    ssl: 'verify-full',
    sslrootcert: '/etc/ssl/certs/ca-certificates.crt',
  });

}else{
  
  module.exports = new Pool({
    host: myObject.DB_HOST, 
    user: myObject.ROLE_NAME,
    database: myObject.DATABASE,
    password: myObject.PASSWORD,
    port: myObject.DB_PORT,
    ssl: {
    require: true,
    },
  });

}

