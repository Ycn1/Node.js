const fs = require('fs');

let pathfile = './data.json';
const uuidv1 = require('uuid/v1');

const Arrcolor = ['#f10','#ff6700','#ccc','#ff0','#f1f2f3'];
function getRandom(min,max)  {
	return Math.round(min + (max-min)*Math.random());
}

let add = (options,callback)=>{
	fs.readFile(pathfile,(err,data)=>{

		if(!err){
			// console.log(data);
			//转换成对象
			let obj = JSON.parse(data);
			options.color = 'rgb('+getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')';
			options.id = uuidv1();
			obj.push(options);

			//转换成字符串
			let str = JSON.stringify(obj);
			fs.writeFile(pathfile,str,(err)=>{
				if(!err){
					callback(null,options);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})

}

let get =(callback)=>{
	fs.readFile(pathfile,(err,data)=>{
		if(!err){
			let obj =JSON.parse(data);

			callback(null,obj);
		}else{
			callback(err);
		}
		
	})
}

let remove = (id,callback)=>{

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

remove('41a31330-8f1d-11e8-aae5-c7179a7c15c7',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log("error");
	}
})

module.exports = {

	get :get,
	add: add,
	remove:remove


}