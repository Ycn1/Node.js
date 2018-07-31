const fs = require('fs');



//可写流，原来没有的文件也不会报错，系统会创建一个这样的文件
// console.log(ws);

/*const ws = fs.createWriteStream('./ws.txt');

ws.on('open',()=>{
	console.log('open success..');
})


ws.on('close',()=>{

	console.log('close success');
})
ws.on('finish',()=>{
	console.log('finish...');
})


ws.write('123');

ws.write('aaa');

ws.end();*/

const rs = fs.createReadStream('./rs.txt');


let body = '';
rs.on('data',(chunk)=>{

	body += chunk;

})

rs.on('open',()=>{
	console.log('open success..');
})


rs.on('close',()=>{

	console.log('close success');
})

rs.on('end',()=>{
	console.log(body);
})


//把可读流放入可写流

rs.pipe(ws);