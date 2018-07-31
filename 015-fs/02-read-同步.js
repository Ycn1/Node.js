const fs =require('fs');

const fd = fs.openSync('./01.txt','r');

const buf = Buffer.alloc(100);

fs.readSync(fd,buf,0,100,0);

console.log(buf);