const http=require("http");
const urlLib=require("url");

var server=http.createServer(function(req,res){
    var req_get_data= urlLib.parse(req.url,true);
    // console.log(req_get_data.query);
    if(null!=req_get_data["file"]){
        
    }
});
server.listen(8181);
