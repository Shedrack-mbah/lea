const express=require("express");


const app=express();



app.get("/",(req,res)=>{
  let list=[22,33,44,44,33,33,11,22,22];
  function nth_most_rateSignature(arr,n) {
   return arr.reduce((an,b)=>{
    
     const j=Math.min(...arr);
     const i=arr.indexOf(j)
     res.send(`minimun value ${j} ` )
            },0)
  }
  nth_most_rateSignature(list,1);
  res.end();
  
})
  const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})