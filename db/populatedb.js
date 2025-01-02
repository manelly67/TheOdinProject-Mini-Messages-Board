#! /usr/bin/env node

const { Client } = require("pg");


const myObject = {}
require('dotenv').config({ processEnv: myObject });
const connectionString = `postgresql://${myObject.ROLE_NAME}:${myObject.PASSWORD}@${myObject.DB_HOST}/${myObject.DATABASE}?sslmode=require`;


const SQL = `CREATE TABLE IF NOT EXISTS messages ( 
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
textm varchar(40) NOT NULL, 
userm varchar(40), 
added timestamp );

INSERT INTO messages (textm, userm, added) 
VALUES
  ('Hi there!','Blossom','2024-12-31 1:00:00'),
  ('Hello World!','Bubbles','2024-12-31 1:00:00'),
  ('Hi there!','Buttercup','2024-12-31 1:00:00'),
  ('Hello World!','Sakura','2024-12-31 1:00:00');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: connectionString,
    });

    try {
        await client.connect();
        console.log('connected');
      } catch (error) {
        console.log(error); 
      }

    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();