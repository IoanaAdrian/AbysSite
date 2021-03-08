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

    //Logo
    if(req.url=="/logo.png"){
        fs.readFile('./hpages/logo.png',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //Main2js
    if(req.url=="/js/main2.js"){
        fs.readFile('./hpages/js/main2.js',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //FinalPinkBike
    if(req.url=="/models/finalpinkbike.glb"){
        fs.readFile('./hpages/models/finalpinkbike.glb',function(err,data){
            handleErr(err);
            res.write(data);
            res.end();
        })
    }

    //Handle login
    if(req.url=="/login"){
        res.writeHead(302, {
            'Location': '/path.html'
            //add other headers here...
          });
        res.end();
    }

    //Logged in page redirect
    if(req.url=="/test.html"){
        fs.readFile('./hpages/test.html', function(err,data){
            handleErr(err);
            res.writeHead(200,{'Content-Type':'text/html'})
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