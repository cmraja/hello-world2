const   express = require('express');
const app = express();


app.get("/hello", (req,res)=>{
  res.status(200).send("hello world feature branch!");
})

app.listen(3000,()=>console.log("application strated successfully!"));