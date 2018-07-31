 const http = require('http');

 const url = require('url');

 const querystring = require('querystring');
 const formidable = require('formidable');
 const util = require('util');

 const path =require('path');
 const fs =require('fs');


 const  server = http.createServer((req,res)=>{
 	// res.setHeader('Content-Type', 'text/html;charset=UTF-8');

	if(req.method.toUpperCase() === 'POST'){
		console.log(req.url);
	  	let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
	  	
	  	form.keepExtensions = true;

	    form.parse(req, function(err, fields, files){

	     let oldPath = './'+files.file.path;
          // console.log(oldPath);
          let extname = path.extname(oldPath);  
 
          let newPath = './upload/'+(new Date()).getTime()+Math.random()+extname;
 		  fs.rename(oldPath,newPath,(err)=>{
 		  	if(!err){
 		  		 res.writeHead(200, {'content-type': 'text/plain'});
	      		 res.write('received upload:\n\n');
	      		 res.end(util.inspect({fields: fields, files: files}));
 		  	}
 		  });

	    // 改名字
	 
	     
	    });
	}
	
 	

 });

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 127.0.0.1:3000');
 });

