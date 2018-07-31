

const  {Writable} = require('stream');


class MyWriter extends Writable {
	constructor (){
		super();
	}
	_write(chunk,encoding,callBack){
		console.log(chunk.toString());

		callBack();
	}
}



const writer = new MyWriter();

 
writer.on('finish',()=>{
	console.log('finish....');
})
writer.write('aa','utf8',()=>{
	console.log('writer...');
})

//触发finish事件
writer.end();



