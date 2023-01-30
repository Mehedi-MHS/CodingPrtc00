const pool = require("./db");

function Operation(){
  this.add=add;
  this.update=update;
  this.remove=remove;
  this.get=get;
  this.closeConnection=closeConnection;
}



function add(err,data,callback) {
  var obj=JSON.parse(data);
  var sql = "INSERT INTO db00.crud00 (??,??) VALUES (?,?) ";
  var inserts = ['uid',
    'text',
    btoa(obj.unique),
    String(obj.text)];
  sql = mysql.format(sql, inserts);
  pool.getConnection(function(err, connection) {
    if (err) throw err; //Not connected
    connection.query(sql, function(err, results, fields) {
      connection.release();
      if (err) throw err;
      if (results.affectedRows > 0) {
        callback({
          "results": results,
          "affectedRows": results.affectedRows
        });
      } else {
        err("Failed to insert data");
      }
    });
  });
}


 function update(err,data,callback) {
   var obj=JSON.parse(data);
  var sql = "UPDATE db00.crud00 SET ??=? WHERE ??=?";
  var inserts = ['text',obj.text, 'uid', obj.unique];
  sql = mysql.format(sql, inserts);
  pool.getConnection(function(err,
    connection) {
    if (err) throw err;
    connection.query(sql, function(err, results, fields) {
      connection.release();
      if (err) throw err;
      if (results.affectedRows > 0) {
        callback({
          "results": results,
          "affectedRows": results.affectedRows
        });
      } else {
        err("Failed to update data ! ");
      }
    });
  });
}

  function get(err,callback) {
  var sql = "SELECT * FROM db00.crud00";
  pool.getConnection(function(err,
    connection) {
    if (err) throw err;
    connection.query(sql, function(err, results, fields) {
      connection.release();
      if (err) throw err;
      if (results.affectedRows > 0) {
        callback({
          'results': results,
          'affectedRows':results.affectedRows
        });
      } else {
        err("Failed to get data from database !");
      }
    });
  });
}

  function remove(err,data,callback) {
    var obj=JSON.parse(data);
    
  var sql = "DELETE FROM db00.crud00 WHERE ??=?";
  var inserts = ['uid',obj.unique];
  sql = mysql.format(sql, inserts);
  pool.getConnection(function(err,
    connection) {
    if (err) throw err;
    connection.query(sql, function(err, results, fields) {
      connection.release();
      if (err) throw err;
      if (results.affectedRows > 0) {
        callback({
          'results': results,
          'affectedRows':results.affectedRows
        });
      } else {
        err("Failed to delete data !");
      }
    });
  });
}

function closeConnection() {
  pool.end(function() {
    console.log("Connection pooling terminated");
  });
};
} //function ended


var Operation=new Operation();
module.exports=Operation;