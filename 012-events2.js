



//核心模块events返回值是一个类
const EventMitter = require ('events');

//新建一个类继承模块返回的类
class MyEvents extends EventMitter {

}

//新建一个对象
const myEvents = new MyEvents();


/*myEvents.on('test',(ev,arg1,arg2)=>{
	console.log('test event 1',arg1,arg2);
})

myEvents.emit('test',['aa','bb']);*/

//后端部分，传参数的时候，不需要把参数写成数组形式，也不用传递事件ev
/*myEvents.on('test',(arg1,arg2)=>{
	console.log('test event 1',arg1,arg2);
})
myEvents.on('test',(arg1,arg2)=>{
	console.log('test event 2',arg1,arg2);
})
*/

// myEvents.emit('test','aa','bb');


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

//结果是相等，都是绑定事件s
console.log(myEvents.on == myEvents.addListener);



//查看test监听的事件的个数



//移除监听事件fn1 剩下事件fn2

myEvents.removeListener('test',fn1);


console.log(myEvents.listeners('test'));