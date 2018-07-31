 const http = require('http');
 const fs = require('fs');


 const  server = http.createServer((req,res)=>{
 	res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 	fs.readFile('./index.html',(err,data)=>{
 		if(!err){
 			res.end(data);
 		}else{
 			res.end('<h1>你好</h1>');
 		}
 	})

 	


 });

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 1270.0.0.1:3000');
 });

