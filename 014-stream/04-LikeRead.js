

const EventEmitter  = require('events');

class LikeRead extends EventEmitter {

	constructor(data,offsetLength){
		super();

		this.data = data;
		this.offsetLength = offsetLength;

		this.on('newListener',(eventName)=>{
			if(eventName == 'data'){
				setImmediate(()=>{
					this._pispatch();
				})
			}

			
			
		})

	}
	_pispatch(){
		let totalLength = this.data.length;

		let rest = totalLength;


		while(rest > 0){
			let start = totalLength - rest;

			let end = start + this.offsetLength;
			
			let str = this.data.slice(start,end);

			
			let buf = Buffer.from(str);
			this.emit('data',buf);

			rest -=this.offsetLength;
		}
		this.emit('end');

	}
} 

let data = `aaaaaaaaaabbbbbbbbbb`;

const likeread = new LikeRead (data,10);

likeread.on('data',(chunk)=>{
	console.log(chunk);
})

likeread.on('end',()=>{
	console.log('end...');
})