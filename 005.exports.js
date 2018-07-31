






let str = "hello";

let obj1 = {name:"Alisa",age:19};

let fn = () =>{

};


//当通过增加对象的方式添加


//当使用export的时候，相当于给新建了一个对象，exports指向这个新建的对象，此时module.exports与exports不相等了。
//因为006里面引用的时候运行的是module.exports,所以此时获取不到module.exports。


/*exports = {
	str:str,
	obj1:obj1,
	fn:fn
}*/


//使用module.exports虽然也是新建一个对象，但是引用的时候也是module.exports，所以路径存在。
module.exports = {
	str:str,
	obj1:obj1,
	fn:fn
}


