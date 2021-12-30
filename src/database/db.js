const Connection = require('mssql').Connection;  
const config = {  
    server: 'PE7466SR091\SR_2642',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sr2642', //update me
            password: 'sr2642'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'T'  //update me
    }
};  
const connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

//consulta
function executeStatement() {  
    req = new Request("SELECT TOP (1000) * FROM [T].[sr2642].[Conquiste2021_Unidades];", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    req.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    req.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    req.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(req);  
}  

//connection.connect();

module.exports = {
    connection,
}