var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'softgetix_website'
});

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'softgetix_website',
//   password: 'feM{q)gA_Amt',
//   database: 'softgetix_website'
// });

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;