


const {Readable} = require('stream');

class Readpersonalc extends Readable {
	 constructor (){
	 	super();

	 	this.index = 0;
	 }

	 _read(){
	 	this.index++;

	 	if(this.index >5){
	 		this.push(null);
	 	}else{
	 		let str = ''+ this.index;

	 		let buf = Buffer.from(str);

	 		this.push(buf);
	 	}
	 }
}


const myread = new Readpersonalc();

let body = '';
myread.on('data',(chunk)=>{
	body += chunk;
	
	// console.log(chunk.toString());
});

myread.on('end',()=>{
	console.log(body);
	console.log('finish....');
})