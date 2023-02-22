var http = require("http");

const PORT = 8081;

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url === '/welcome'){
        res.writeHead(200, {'Contenet-Type': 'text/plain'});
        res.end("Welcome To Dominos!");

    }
    if(req.url === '/contact'){
        res.writeHead(200, {'Contenet-Type': 'text/plain'});
        res.end("phone: '18602100000'\nemail: 'guestcaredominos@jublfood.com'  ");
    }
    

    else{
        res.writeHead(404,{'Contenet-Type': 'text/plain'});
        res.end("404 error not found");
    } 
}
httpServer.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
module.exports = httpServer;