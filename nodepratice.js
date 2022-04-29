const fs = require('fs');
const path =require('path');
// fs.readFile('index.html','utf-8',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//       console.log(data);
//     }
// });
// fs.writeFile('abc.txt',"hi",(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
    
//       console.log("data");

    
// })
const a = path.extname("/timetabel/index.html");
const b = path.join(__dirname,'timetable','abc.txt','..','/');
console.log(a);
console.log(b);
console.log("here");
const homePage = fs.readFileSync(path.join(__dirname,"index.html"));
const homePage1 = fs.readFileSync(path.join(__dirname,"index.html"));
const stylesheet = fs.readFileSync(path.join(__dirname,"css","util.css"));
const stylesheet1 = fs.readFileSync(path.join(__dirname,"css","navbar.css"));
const stylesheet2 = fs.readFileSync(path.join(__dirname,"css","index.css"));
const js = fs.readFileSync(path.join(__dirname,"javascript","index.js"));
const server = https.createServer((req,res)=>{
    if (req.url === '/index.html'){
      res.writeHead(200,'content-Type','text/html');
      res.write(homePage);
      res.end();
    }
    else if(req.url === '/css/navbar.css'){
        res.writeHead(200,'content-Type','text/plain');
        res.write(stylesheet1);
        res.end();
    }
    else if(req.url === '/css/index.css'){
        res.writeHead(200,'content-Type','text/css');
        res.write(stylesheet2);
        res.end();
    }
    else if(req.url === '/css/util.css'){
        res.writeHead(200,'content-Type','text/css');
        res.write(stylesheet);
        res.end();
    }
    else  {
        res.writeHead(404,'content-Type','text/html');
        res.write(homePage1);
        res.end();
        
    }
    // res.end("hello world")
    console.log(req.url,req.method);
    console.log(req);
})