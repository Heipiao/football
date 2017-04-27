var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'nodejs',
    port: 3306
});

function insertTwitter(twitterNode) {
	//connection.connect();
    var id = twitterNode.id;
    var time = twitterNode.time;
    var text = twitterNode.text
	var AddSql = 'INSERT INTO twitterLists(id,time,text) VALUES(?,?,?)';
	var AddSql_Params = [id,time,text];

		connection.query(AddSql,AddSql_Params,function (err, result) {
		        if(err){
		         console.log('[INSERT ERROR] - ',err.message);
		         return;
		        }        
		        console.log('ok!'); 
		        //return;    
		});
	//connection.end();
}


function InfoTwitter() {
	//connection.connect();

	var  InfoSql = 'SELECT EXISTS(SELECT * FROM twitterLists WHERE id = 853951693599518700 )';
	
	connection.query(InfoSql,function (err, result,data) {
	        if(err){
	          console.log('[INFO ERROR] - ',err.message);
	          return;
	        }   
	        if(data.length >= 1){
	        	console.log("yes!");  
	        	return;
	        }            
	});
	connection.end();
}

InfoTwitter();

module.exports = insertTwitter;
