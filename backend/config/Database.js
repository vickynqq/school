import { Sequelize } from "sequelize";
 
const db = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
console.log(db);
export default db;