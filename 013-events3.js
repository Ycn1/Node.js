



//核心模块events返回值是一个类
const EventMitter = require ('events');

//新建一个类继承模块返回的类
class MyEvents extends EventMitter {

}

//新建一个对象
const myEvents = new MyEvents();

//当有新的监听事件被绑定之后，就会执行一次newListener事件。
myEvents.on('newListener',(eventName,callBack)=>{
	console.log(eventName,callBack);
})


let fn1 = () =>{
	console.log('test event fn1 ');
};

let fn2 = () =>{
	console.log('test event fn2 ');
};


myEvents.on('test',fn1);

myEvents.on('test',fn2);

//触发
myEvents.emit('test');

