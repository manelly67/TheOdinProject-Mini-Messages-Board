const { Pool } = require("pg");

const myObject = {};
require('dotenv').config({ processEnv: myObject });


module.exports = new Pool({
    host: myObject.HOST, 
    user: myObject.ROLE_NAME,
    database: myObject.DATABASE,
    password: myObject.PASSWORD,
    port: 5432,
    ssl: {
    require: true,
    },
  });
