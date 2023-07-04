const mysql=require("mysql");
const pool=mysql.createPool({
	host:"127.0.0.1",
	port:3306,
	user:"root",
	password:"xfr@1737208227",
	database:"vue_admin",
	connectionLimit:15
});
module.exports=pool;
