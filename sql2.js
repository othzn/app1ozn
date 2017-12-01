    var http = require("http");  
    var mysql  = require('mysql');
    var url = require('url');
    http.createServer(function (req, res) {  
     // Send the HTTP header   
       // HTTP Status: 200 : OK  
       // Content Type: text/plain  
       res.writeHead(200, {'Content-Type': 'text/plain'});  
		 
		
		/*for(i=0;i<5;i++)
		{
			res.write('\nHello World! OZNs '+i);
			//
		}*/
		
		var con = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "",
		  database: "phpz"
		});

		con.connect(function(err) {
		  if (err) throw err;
		  con.query("SELECT * FROM clients", function (err, result, fields) {
		    if (err) throw err;
		    
		   // console.log(result[0].nom);
		   for(i=0;i<result.length;i++)
		{
			res.write(i + ' : '+result[i].nom+'\n');
			//
		}
		res.write('=======================================\n');
		var qr =url.parse(req.url, true).query
		var idreq=qr.id;
		res.write('Query nom  : '+result[idreq].nom+'\n');
		    //res.write(result[0].nom);
		    res.end();
		  });
		});
		//

    }).listen(8081);  
    // Console will print the message  
    console.log('Server running at http://127.0.0.1:8081/');  