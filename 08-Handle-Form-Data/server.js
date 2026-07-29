function handle(req, res)
{
    console.log(req.url)
    console.log(req.method)

    let body = ""

    if(req.url === "/register" && req.method === "POST")
    {
        req.on("data", receiving)
        req.on("end", received)
    }
    else
    {
        res.writeHead(404)
        res.end("Something went wrong")
    }

    function receiving(piece)
    {
        body = body + piece.toString();
        console.log("Data is receiving........")
    }

    function received()
    {
        const parser = require("querystring")
        body = parser.parse(body)
        console.log("Data is received successfully!")
        console.log(body)

        res.writeHead(200, {
            "Content-Type" : "text/json"
        })
        res.write("Data send successfully")
        res.end(JSON.stringify(body))
    }

}