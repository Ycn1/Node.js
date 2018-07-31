



//核心模块events返回值是一个类
const EventMitter = require ('events');

//新建一个类继承模块返回的类
class MyEvents extends EventMitter {

}

//新建一个对象
const myEvents = new MyEvents();


//绑定事件 , 可以绑定多个事件，但是默认的最多是10个事件。可以通过 emitter.setMaxListener(12);来修改事件个数
myEvents.on('test',(arg1,arg2)=>{
	console.log('test event 1',arg1,arg2);
})

myEvents.on('test',(arg1,arg2)=>{
	console.log('test event 2',arg1,arg2);
})

myEvents.on('test',(arg1,arg2)=>{
	console.log('test event 3',arg1,arg2);
})
//触发   

myEvents.emit('test','aa','bb');


