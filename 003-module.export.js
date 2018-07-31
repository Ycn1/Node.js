


let str = "hello";

let obj1 = {name:"Alisa",age:19};

let fn = () =>{

};


//添加属性的方式，来增加内容的时候，module.exports与exports一样
//模块的暴露
 
module.exports.obj1 = obj1;

module.exports.fn = fn;

//与上面的方法一样
exports.str = str;
exports.obj1 = obj1;

exports.fn = fn;



