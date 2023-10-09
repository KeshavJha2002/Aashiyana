import express,{Request,Response} from 'express'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

mongoose.connect(process.env.DB!)
  .then(()=>console.log("connected to db"))
  .catch((e:Error)=>console.log(e));

app.get('/',(req:Request,res:Response)=>{
  res.send("Hello World");
});

app.listen(process.env.PORT || 4000,()=>{
  console.log(`Server is being hosted in ${process.env.PORT || 4000}`)
})  