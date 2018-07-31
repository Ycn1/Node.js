const  fs = require('fs');

fs.readFile('./01.txt',(err,data)=>{
	if(!err){
		console.log(data);
	}
})