import express,{NextFunction, Request,Response} from 'express'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/authRoutes';
import cors from 'cors';

dotenv.config();

const app = express();

mongoose.connect(process.env.DB!)
  .then(()=>console.log("connected to db"))
  .catch((e:Error)=>console.log(e));

app.use(express.json());
app.use(cors());

app.get('/',(req:Request,res:Response)=>{
  res.send("Hello World");
});

app.use('/api/auth',authRoute);

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal service error";
  return res.status(statusCode).send({
    success : false,
    statusCode,
    errorMessage,
  })
})

app.listen(process.env.PORT || 4000,()=>{
  console.log(`Server is being hosted in ${process.env.PORT || 4000}`)
})  

