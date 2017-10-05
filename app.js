var http = require('http');
var fs = require('fs');
var port = 6789;
var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    var file;
    var type;

    switch (request.url) {
        case "/":
            file = "views/index.html"
            type = "html"
            break;
        case "/cars":
            file = "views/cars.html"
            type = "html"
            break;
        case "/cats":
            file = "views/cats.html"
            type = "html"
            break;
        case "/cars/new":
            file = "views/newcar.html"
            type = "html"
            break;
        case "/style.css":
            file = "stylesheets/style.css"
            type = "css"
            break;
        case "/car1.jpg":
            file = "images/car1.jpg"
            type = "jpg"
            break;
        case "/car2.jpg":
            file = "images/car2.jpg"
            type = "jpg"
            break;
        case "/cat1.jpg":
            file = "images/cat1.jpg"
            type = "jpg"
            break;
        case "/cat2.jpg":
            file = "images/cat2.jpg"
            type = "jpg"
            break;
        default:
        file = null;
        break;
    }
    
    if (file !== null) {
        if (type === "html") {
            fs.readFile(`${file}`, "utf8", function(err, contents) {
                if (err) { console.log(err); }
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            });
        } else if (type === "css") {
            fs.readFile(`${file}`, function(err, contents) {
                if (err) { console.log(err); }
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(contents);
                response.end();
            });
        } else if (type === "jpg") {
            fs.readFile(`${file}`, function(err, contents) {
                if (err) { console.log(err); }
                response.writeHead(200, {'Content-Type': 'text/jpg'});
                response.write(contents);
                response.end();
            });
        }
        
    } else {
        response.writeHead(404);
        response.end("File not Found!");
    }
});

server.listen(port, function(){
    console.log("Running on port:", port);
});