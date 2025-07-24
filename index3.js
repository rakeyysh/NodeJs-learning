

const http = require("http");

function myHandler(req, res) {


    console.log(req);
    console.log(req.method);

    if (req.method === "GET") res.end("got methods");
    else
        res.end(" post methods");
    console.log(req.method);
}

const Server = http.createServer(myHandler);

Server.listen(9000, () => {
    console.log("Ok everything");
})