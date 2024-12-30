const pool = require("./pool");


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