const fs = require('fs');

fs.open('./01.txt','r',(err,fd)=>{
	if(!err){

		console.log('open success ...');
		let buf = Buffer.alloc(20);

		fs.read(fd,buf,0,20,0,(err)=>{
			if(!err){
				
				console.log('read success ...');

				fs.close(fd,(err)=>{
					console.log('close success....');

					console.log(buf);
				})
			}else{
				

				console.log('read error ...');
				

			}
		})
	}else{
		console.log('open error ...');

	}
})