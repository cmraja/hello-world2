const   express = require('express');
const app = express();


app.get("/hello", (req,res)=>{
  res.send(200,"hello world")
})

app.listen(3000,()=>console.log("application strated successfully!"));