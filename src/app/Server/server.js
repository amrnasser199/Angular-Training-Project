const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");

const Port=5000;

const app= express();
app.use(bodyparser.json());
app.use(cors());

app.get("/",function(requ,res)
{
  res.send("Hello from getting in node server")
});

app.listen(Port,function(){
  console.log("this function with port "+Port)
});

app.post("/enroll",function(req,res)
{
console.log(req.body);
res.status(200).send({"data":"Success Data"})

});
