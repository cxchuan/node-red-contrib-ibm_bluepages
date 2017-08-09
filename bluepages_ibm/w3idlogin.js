var bluepages=require("./bluepages");

module.exports=function(RED){
    function w3idlogin(config){
        RED.nodes.createNode(this,config);

       // this.email=config.email;
        var node=this;
        node.on('input',function(msg){
            msg.payload.account=msg.payload.account;
            msg.payload.password=msg.payload.password;
            msg.payload= msg.payload.toLowerCase();
    //         bluepages.authenticate(msg.payload.account,msg.payload.password,function(data){
    //  if(data){
    //     console.log(data);
    //     node.json(200,{url:"/home"});//define url/home
    //     }else
    //   node.sendStatus(404);
    //     });
            node.send(msg);
        });
    }
     RED.nodes.registerType("w3idlogin",w3idlogin);
}