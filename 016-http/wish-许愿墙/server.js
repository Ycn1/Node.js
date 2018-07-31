 const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');
const querystring = require('querystring');
const url = require('url');

const wishmode = require('./Wishmode.js')
var swig  = require('swig');

 const  server = http.createServer((req,res)=>{
 	// res.setHeader('Content-Type', 'text/html;charset=UTF-8');

    let reqUrl = url.parse(req.url,true);
    let pathname = reqUrl.pathname;
 	let filename = req.url;
    //显示首页
    if(pathname == '/index.html'){

        wishmode.get((err,data)=>{

            if(!err){
                       /*  let html = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>wish</title>
                                
                                <link rel="stylesheet" href="css/index.css">
                            </head>
                            <body><div class="wish">`
                   data.forEach((val)=>{
                                html += `
                                    <div class="pep" style= "background:${val.color}">
                                        <a href="javascript:;" class="close" data-id = ${val.id}></a>
                                        ${val.content}
                                    </div> 
                               `
                             }) ;

                     html += `  </div> <div class="content">
                                 <textarea class="text"  id="content" cols="30" rows="20"></textarea>
                                <a href="javascript:;">许下心愿</a>
                              </div>
                            </body>
                            <script type="text/javascript" src="js/jquery-1.12.4.js"></script>
                            <script type="text/javascript" src="js/jquery.pep.js"></script>
                            <script type="text/javascript" src="js/index.js"></script>
                            </html>`;*/
                            var template = swig.compileFile(__dirname+'/static/index.html');
                            var html = template({
                               data:data,
                            });
                           res.setHeader('Content-Type', 'text/html;charset=UTF-8');

                            res.end(html);

                }else{
                    console.log(err);
                }

               
            });
           


        
    }else if(pathname == '/add' && req.method.toUpperCase() == 'POST'){
        let body = '';

        req.on('data',(chunk)=>{
            body += chunk;
        });
        req.on('end',()=>{
            let obj = querystring.parse(body);
            wishmode.add(obj,(err,data)=>{
                let result = {};
                if (!err) {
                    result = {
                        status:0,
                        data:data
                    }

                   
                }else{
                      result = {
                        status:1,
                        message:'错误'
                    }
                }
             let resultJson = JSON.stringify(result);
             res.end(resultJson);
            })
        })  
    }else if(pathname == '/del'){
       /*  let body = '';

        req.on('data',(chunk)=>{
            body += chunk;
        });
        req.on('end',()=>{*/
            wishmode.remove(reqUrl.query.id,(err,data)=>{

                console.log("111",reqUrl.query.id);
                let result = {};
                if
                    (!err){
                        result = {
                            status  :0
                        }
                    let resultJson = JSON.stringify(result);
                    res.end(resultJson);
                    }
            })
        // })
    }

    else{
            //静态资源处理
             //文件夹的时候就访问干文件夹下面的index.html页面
            if(filename.lastIndexOf('.') == -1){
                filename = filename + '/index.html';
            }

            console.log(filename);
            //规范路径把多余的/去掉
            let filepath  =  path.normalize(__dirname + '/static/'+filename);


            //获取文件的后缀名
            let fileExtName = path.extname(filepath);


            fs.readFile(filepath,(err,data)=>{

                let minitype = mime[fileExtName] || 'text/plain';
                if(!err){
                    
                        res.setHeader('Content-Type', minitype+';charset=UTF-8');

                        res.end(data);
                    
                    // let exnametype = fileExtName
                    

                }else{
                    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                    res.end('<h1>您访问的页面走丢啦</h1>')
                }
            });
         
        }

        
    });

 	

 server.listen(3000,'127.0.0.1',()=>{
 	console.log('server  running at 1270.0.0.1:3000');
 });

