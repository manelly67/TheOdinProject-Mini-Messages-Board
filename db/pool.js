const { Pool } = require("pg");

const myObject = {};
require('dotenv').config({ processEnv: myObject });

if (myObject.NODE_ENV ='production'){

  module.exports = new Pool({
    host: myObject.HOST, 
    user: myObject.ROLE_NAME,
    database: myObject.DATABASE,
    password: myObject.PASSWORD,
    port: process.env.PORT || myObject.DB_PORT,
    ssl: {
    require: true,
    },
  });

}else{
  
  module.exports = new Pool({
    host: myObject.HOST, 
    user: myObject.ROLE_NAME,
    database: myObject.DATABASE,
    password: myObject.PASSWORD,
    port: myObject.DB_PORT,
    ssl: {
    require: true,
    },
  });

}

