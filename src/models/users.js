const db_connect = require('../config/database')

const findAll = () => {
    const SQLQuery = 'SELECT * FROM users';
    return db_connect.execute(SQLQuery);
}

const findOne = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id = ${id}`;
    return db_connect.execute(SQLQuery);
}

const create = (body) => {
    const SQLQuery = `INSERT INTO users(name, email) VALUES ('${body.name}', '${body.email}')`;
    return db_connect.execute(SQLQuery);
}

const update = (id, body) => {
    let updateFields = []
    if (body.name !== undefined) {
        updateFields.push(`name = '${body.name}'`);
    }
    if (body.email !== undefined) {
        updateFields.push(`email = '${body.email}'`);
    }
    // Gabungkan field yang akan diupdate menjadi satu string
    const updateFieldsString = updateFields.join(", ");

    // const SQLQuery = `UPDATE users SET name = '${body.name ?? ''}', email = '${body.email ?? ''}' WHERE id = '${id}'`;
    const SQLQuery = `UPDATE users SET ${updateFieldsString} WHERE id = '${id}'`;
    return db_connect.execute(SQLQuery);
}

const remove = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`;
    return db_connect.execute(SQLQuery);
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}