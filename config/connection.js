// setting up mysql connection
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL)
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port: '3306',
    host: 'tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ww597lratreumefo',
    password: 'dttc354psqjcqug0',
    database: 'nftzfv349vt5bfvl'
  });
};

// connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",  // please provide your own password here
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
