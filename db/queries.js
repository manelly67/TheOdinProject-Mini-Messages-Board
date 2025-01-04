/* const pool = require("./pool"); */

const pkg = require("pg");
// Create a new pool using your Neon database connection string
const { Pool } = pkg;

const myObject = {};
require('dotenv').config({ processEnv: myObject });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || myObject.DATABASE_URL
});


async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
        return rows;
}


async function selectMessage(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
    return rows;
}


async function insertMessage(messageToAdd) {
    console.log(messageToAdd.textm,messageToAdd.userm,messageToAdd.added);
    await pool.query(`INSERT INTO messages(textm, userm, added) VALUES ('${messageToAdd.textm}','${messageToAdd.userm}','${messageToAdd.added}')`);
    console.log('done');
}


module.exports = {
    getAllMessages,
    selectMessage,
    insertMessage
};