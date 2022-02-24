require('dotenv').config();

// Config

const mssqlconfig ={
	user: process.env.sqlUsername,
	password: process.env.sqlPassword,
	server: "OKANCAN",
	database: "Insaat",
	options:{
		port:1433,
		encrypt:false
	},
	pool:{
		max:20,
		min:5,
		idleTimeoutMillis:150000
	}
}
module.exports = mssqlconfig;