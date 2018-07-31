 const http = require('http');

 const url = require('url');

 const querystring = require('querystring');


 const  server = http.createServer((req,res)=>{
 	res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 	
 	console.log(req.url);
 	const myUrl = new url.parse(req.url,true);
 	const query  = myUrl.query;
 	console.log(query);
 	console.log(query.name);

 	// const myUrl = new URL(req.url);
 	// const myUrlquery = querystring.parse(myUrl.query);
 	// console.log(myUrlquery);

 	res.end('<h1>你好</h1>');


 });

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 127.0.0.1:3000');
 });

