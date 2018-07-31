const fs = require('fs');

let pathfile = './666.json';
const uuidv1 = require('uuid/v1');

let add = (name,callback)=>{
	fs.readFile(pathfile,(err,data)=>{

		if(!err){
			// console.log(data);
			//转换成对象
			let obj = JSON.parse(data);

			obj.push({
				id:uuidv1(),
				name:name
			});

			//转换成字符串
			let str = JSON.stringify(obj);
			fs.writeFile(pathfile,str,(err)=>{
				if(!err){
					callback(null,obj);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})

}

let get =(id,callback)=>{
	fs.readFile(pathfile,(err,data)=>{
		let obj =JSON.parse(data);

		let result = {};

		for(key in obj){
			if(obj[key]['id'] == id){
				result = obj[key];
				break;
			}
		}

		callback(null,result);
	})
}

let updedate = (id,name,callback)=>{
	fs.readFile(pathfile,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			obj.some((val)=>{
				if(val['id'] == id){
					val['name'] = name;

					return true;
				}
			})
			let str = JSON.stringify(obj);
			fs.writeFile(pathfile,str,(err)=>{
				if(!err){
					callback(null,obj);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}

})
}

let deletePer = (id,callback)=>{

	fs.readFile(pathfile,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);

			let newData = obj.filter((val)=>{
				return val['id'] != id;
			})
			let str = JSON.stringify(newData);
			fs.writeFile(pathfile,str,(err)=>{
				if(!err){
					callback(null,newData);
				}else{
					callback(err);
				}
			})

		}
	})

}

/*add('Alisa',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('err::::');
	}
})*/

/*get('28f93d50-8f18-11e8-b76c-8d106ad9be6e',(err,data)=>{
	if(!err){
		console.log("out::",data);

	}else{
		console.log('error...');
	}
})*/

// updedate('41a31330-8f1d-11e8-aae5-c7179a7c15c7','Tom',(err,data)=>{
// 	if(!err){
// 		console.log("update:::",data);
// 	}else{
// 		console.log("error");
// 	}
// })

deletePer('41a31330-8f1d-11e8-aae5-c7179a7c15c7',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log("error");
	}
})