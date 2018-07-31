const fs = require('fs');

fs.open('./01.txt','w',(err,fd)=>{
	if(!err){//打开成功

		console.log('open sccess ...');

		fs.write(fd,'aaaaaa',(err)=>{
			if(!err){

				console.log('write success ...');

				fs.close(fd,(err)=>{

					if(!err){
						console.log('close success ...');

					}else{
						console.log('close error');
					}
					

				})
			}else{
				console.log('write error ...');
			}
		})

	}else{
		console.log('open error ...');
	}
})