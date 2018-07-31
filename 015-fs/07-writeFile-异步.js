const  fs = require('fs');

fs.writeFile('./01.txt','xxx',{flag:'a'},(err)=>{
	if(!err){
		console.log('success');
	}else{
		console.log('error');
	}
})
