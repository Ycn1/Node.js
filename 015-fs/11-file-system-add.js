const fs = require ('fs');
const uuidv1 = require('uuid/v1');
 

let filepath = './002.json'
let add = (name,callback)=>{

	fs.readFile(filepath,(err,data)=>{
		if(!err){
			//读取成功

			// console.log(data);

			//把data转换成对象
			let obj = JSON.parse(data);
			// console.log(obj);

			obj.push({
				id:uuidv1(),
				name:name
			});

			// console.log(obj);

			let str = JSON.stringify(obj);

			fs.writeFile(filepath,str,(err)=>{
				if(!err){
					//写入文件成功
					// console.log(str);
					callback(null,str);
				}else{
					//写入失败
					callback(err);
				}
			})


		}else{
			//读取错误
			callback(err);

		}
	})
}

let get =(id,callback)=>{

		fs.readFile(filepath,(err,data)=>{
			if(!err){
				// console.log(data);

				let result = {};

				let obj = JSON.parse(data);

				// for(key in obj){
				// 	if(obj[key]['id'] == id){
				// 		result = obj[key]
				// 		break;
				// 	}
				// }
				obj.some((val)=>{
					if(val['id'] == id){
						result = val;
						return true;
					}
				})
				callback(null,result);
			}else{
				callback(error);
			}
		})
	
}

let update =(id,name,callback)=>{
	fs.readFile(filepath,(err,data)=>{
		let obj = JSON.parse(data);
		if(!err){
			obj.some((val)=>{
					if(val['id'] == id){
						val['name'] = name;
						return true;
					}
				})
			let str = JSON.stringify(obj);

			fs.writeFile(filepath,str,(err)=>{
				if(!err){
					//写入文件成功
					// console.log(str);
					callback(null,str);
				}else{
					//写入失败
					callback(err);
				}
			})
			callback(null,obj);
		}else{
			callback(error);
		}
	})
}

let remove=(id,callback)=>{
	fs.readFile(filepath,(err,data)=>{
		let obj = JSON.parse(data);
		if(!err){
			let newobj = obj.filter((val)=>{
				return (val['id'] != id)
			})
			let str = JSON.stringify(newobj);

			fs.writeFile(filepath,str,(err)=>{
				if(!err){
					//写入文件成功
					// console.log(str);
					callback(null,str);
				}else{
					//写入失败
					callback(err);
				}
			})
			callback(null,str);

		}else{
			callback(error);
		}

	})
}

// add("Tom",(err,data)=>{
// 	if(!err){
// 		console.log("success",data);
// 	}else{
// 		console.log("error");
// 	}
// });

// get('b1c823c0-9315-11e8-91dc-9109e8b73f7e',(err,data)=>{
// 	if(!err){
// 		console.log("success:",data);
// 	}else{
// 		console.log("error");
// 	}
// 
// update('14e9b980-9318-11e8-a719-b95f6f2de6ae','Leo',(err,data)=>{
// 	if(!err){
// 		console.log("success",data);
// 	}else{
// 		console.log(error);
// 	}
// })
remove('14e9b980-9318-11e8-a719-b95f6f2de6ae',(err,data)=>{
	if(!err){
		console.log("success",data);
	}else{
		console.log(error);
	}
})