const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url ==="/") {
        fs.readFile("Index.html", (err, data) =>{
            if (err) throw err;
            res.writeHead(200, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        });

    } else if (req.url === "/About") {
        fs.readFile("About.html", (err, data) =>{
            if (err) throw err;
            res.writeHead(200, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        });   

    } else if (req.url === "/Contact") {
        fs.readFile("Contact.html", (err, data) =>{
            if (err) throw err;
            res.writeHead(200, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        });  

    } else {
        fs.readFile("error.html", (err, data) =>{
            if (err) throw err;
            res.writeHead(200, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        }); 
    }

});

server.listen(4000, 'localhost');
console.log("Your server is ready");