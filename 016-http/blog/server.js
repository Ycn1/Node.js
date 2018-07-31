 const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');

 const  server = http.createServer((req,res)=>{
 	res.setHeader('Content-Type', 'text/html;charset=UTF-8');

 	let filename = req.url;


 	//文件夹的时候就访问干文件夹下面的index.html页面
 	if(filename.lastIndexOf('.') == -1){
 		filename = filename + '/index.html';
 	}

 	console.log(filename);
 	//规范路径把多余的/去掉
 	let filepath  =  path.normalize(__dirname + '/static/'+filename);


 	//获取文件的后缀名
    let	fileExtName = path.extname(filepath);


    fs.readFile(filepath,(err,data)=>{

    	let minitype = mime[fileExtName] || 'text/plain';
    	if(!err){
    		
    			res.setHeader('Content-Type', minitype+';charset=UTF-8');

 				res.end(data);
    		
    		// let exnametype = fileExtName
    		

    	}else{
 			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    		res.end('<h1>您访问的页面走丢啦</h1>')
    	}
    })
 


 });

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 1270.0.0.1:3000');
 });

