 const http = require('http');

 const url = require('url');

 const querystring = require('querystring');


 const  server = http.createServer((req,res)=>{
 	res.setHeader('Content-Type', 'text/html;charset=UTF-8');
 	
 	/*console.log(req.url);
 	const myUrl = new url.parse(req.url,true);
 	const query  = myUrl.query;
 	console.log(query);
 	console.log(query.name);
*/	

	if(req.method.toUpperCase() === 'POST'){
			let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
	 	req.on('end',()=>{
	 		let obj = querystring.parse(body);
	 		res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			console.log(obj);
			res.end('<h1>hello</h1>');
	 	});

	}
	
 	

 });

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 127.0.0.1:3000');
 });

