

//这是现在已经废弃的使用  打印出来的是五个16进制的数
/*const buf = new Buffer('hello');

console.log(buf);*/


//这是现在已经废弃的使用
// const buf = new Buffer('暖暖');

//会打印6个16进制的数， 表示一个汉字在node里面占3个bit，即是占了3个16进制数
// console.log(buf);


//打印出来的是六个16进制的数
/*const buf = Buffer.from('buffer');


console.log(buf);
*/

//10表示的是新建buffer的期望长度
const buf = Buffer.alloc(10);


console.log(buf);

//结果是10
console.log(buf.length);

//初始化每一个16进制值都是a
const  buf1 = Buffer.alloc(10,'a');


//数组第一个赋值16进制13.
buf1[0] = 0x13;


//数组的第二个值赋值10进制的12，

buf1[1] = 12;


console.log(buf1);


