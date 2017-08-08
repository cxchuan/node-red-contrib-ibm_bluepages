var bluepages=require("./bluepages");

module.exports=function(RED){
    function w3idlogin(config){
        RED.nodes.createNode(this,config);
        var node=this;
        node.on('input',function(msg){
    //     bluepages.authenticate(msg.payload.account,msg.payload.password,function(data){
    //     if(data){
    //     console.log(data);
    //     res.json(200,{url:"/home"});//define url/home

    // }else
    //   node.sendStatus(404);
  //});
             msg.payload.a = msg.payload.a.toLowerCase();
            node.send(msg);
        });
    }
     RED.nodes.registerType("w3idlogin",w3idlogin);
}