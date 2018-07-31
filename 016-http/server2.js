 const http = require('http');

 const fs = require('fs'); 


 const  server = http.createServer((req,res)=>{
 	// res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 	
	let PathUrl = req.url;
	console.log(PathUrl);
 
 	
 	if(PathUrl == '/index.html'){
 		fs.readFile('./index.html',(err,data)=>{
 			if(!err){
 				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 				res.end(data);
 			}else{
 				res.setHeader('Content-Type', 'text/html;charset=UTF-8');

 				res.statusCode = 404;
 				res.end();
 			}
 		})
 	}else if(PathUrl == '/list.html'){
 		fs.readFile('./list.html',(err,data)=>{
 			if(!err){
 				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 				res.end(data);
 			}else{
 				res.setHeader('Content-Type', 'text/html;charset=UTF-8');

 				res.statusCode = 404;
 				res.end();
 			}
 		})
 	}else if(PathUrl == '/index.css'){
 		fs.readFile('./index.css',(err,data)=>{
 			if(!err){
 				res.setHeader('Content-Type', 'text/css;charset=UTF-8');
 				res.end(data);
 			}else{
 				res.setHeader('Content-Type', 'text/css;charset=UTF-8');

 				res.statusCode = 404;
 				res.end();
 			}
 		})
 	}else if(PathUrl == '/b1.jpg'){
 		fs.readFile('./b1.jpg',(err,data)=>{
 			if(!err){
 				res.setHeader('Content-Type', 'image/jpeg;charset=UTF-8');
 				res.end(data);
 			}else{
 				res.setHeader('Content-Type', 'image/jpeg;charset=UTF-8');

 				res.statusCode = 404;
 				res.end();
 			}
 		})
 	}else if(PathUrl == '/index.js'){
 		fs.readFile('./index.js',(err,data)=>{
 			if(!err){
 				res.setHeader('Content-Type', 'application/x-javascript;charset=UTF-8');
 				res.end(data);
 			}else{
 				res.setHeader('Content-Type', 'application/x-javascript;charset=UTF-8');

 				res.statusCode = 404;
 				res.end();
 			}
 		})
 	}


 	else{
 		res.statusCode = 404;
 		res.end('<h1>页面走丢啦</h1>');
 	}


 })

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 127.0.0.1:3000');
 })

