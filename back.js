var http=require('http')
var fs=require('fs');
http.createServer(function(req,res){
    
    // ? favicon.ico
    console.log(req.url);

    //The main request for the root directory
    if(req.url=="/"){
        fs.readFile('./hpages/index.html', function(err,data){
            handleErr(err);
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            res.end();
        })
    }

    //The request for the styling file
    if(req.url=="/css/style.css"){
        fs.readFile('./hpages/css/style.css',function(err,data){
            res.writeHead(200,{'Content-Type':'text/plain'})
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //The request for the p5js min library
    if(req.url=="/js/p5.min.js"){
        fs.readFile('./hpages/js/p5.min.js',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //The request for the main javascript file
    if(req.url=="/js/main.js"){
        fs.readFile('./hpages/js/main.js',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //The request fot the bike model
    if(req.url=="/models/bici.glb"){
        fs.readFile('./hpages/models/bici.glb',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //The request for the modelviewermin
    if(req.url=="/js/modelviewermin.js"){
        fs.readFile('./hpages/js/modelviewermin.js',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //The request for the *noborder library
    if(req.url=="/js/noborder.js"){
        fs.readFile('./hpages/js/noborder.js',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    
}).listen(8080);
function handleErr(err){
    if(err!=null){
        alert.console.log(err);
    }
}