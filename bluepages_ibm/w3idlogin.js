var bluepages=require("./bluepages");

module.exports=function(RED){
    function w3idlogin(config){
        RED.nodes.createNode(this,config);

       // this.email=config.email;
        var node=this;
        node.on('input',function(msg){
            msg.payload.account=msg.payload.account;
            msg.payload.password=msg.payload.password;
            node.send(msg);
    //         bluepages.authenticate(msg.payload.account,msg.payload.password,function(data){
    //        if(data){
    //    msg.payload.account=msg.payload.account+"yes!";
    //     console.log(data);
    //     node.send(msg);
    //     //node.json(200,{url:"/home"});//define url/home
    //     }else
    //  // node.sendStatus(404);
    //     msg.payload.account=msg.payload.account+"no!";
    //     node.send(msg);
    //     });
         // node.send(msg);
        });
    }
     RED.nodes.registerType("w3idlogin",w3idlogin);
}