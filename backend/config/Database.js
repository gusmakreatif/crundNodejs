import { Sequelize } from "sequelize";
//buat koneksi
const db = new Sequelize('db_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;