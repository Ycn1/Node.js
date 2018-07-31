

//如果想在002文件中打印出str,就需要把str改成全局变量，使用global把str 暴露出去

let  str = "hello";
global.str = str;
console.log(global);