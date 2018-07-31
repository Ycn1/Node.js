const fs =require('fs');


//'a'表示的是追加，'w'表示覆盖写入
const fd = fs.openSync('./01.txt','a');



fs.writeSync(fd,'1234');
fs.closeSync(fd);