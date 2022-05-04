
//lệnh exports để xuất (public) ra, cho ngoài module dùng được db
// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "000000",
    database: "cnpm_db"
  });
 
// Expose a method to establish connection with MariaDB SkySQL
// module.exports = Object.freeze({
//   pool: pool
// });.

module.exports = {
   getConnection() {
     return new Promise(function (res, rej) {
       pool.getConnection()
         .then(function (conn) {
           res(conn);
         })
         .catch(function (error) {
           rej(error);
         });
     });
   }
 };