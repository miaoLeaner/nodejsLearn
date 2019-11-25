const http=require("http");
var server=http.createServer(function(request,response){
    console.log("a client connect");
    console.log(request);
    // console.log("url:"+request.url)
    response.write("abc");
    response.end();
});
server.listen(8181);
