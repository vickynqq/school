import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    name:{
        type: Sequelize.STRING, allowNull:false
    },
    email:{
        type: Sequelize.STRING, allowNull:false, unique: true
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Users;