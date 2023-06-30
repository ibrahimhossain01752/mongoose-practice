import express from 'express';
import cors from 'cors';
import { Application, Request, Response } from 'express';
import { Schema } from 'mongoose';



const app:Application = express();
//using cors
app.use(cors());

//parse data

app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.get('/', (req:Request, res:Response) => {
  // inserting a test data into mongoose

  /* 
    Step1: Interface
    Step2: Schema
    Step3: Model
    Step4: Database Query
  */

    //creating an interface

    interface IUser {
      id: string;
      role: "student";
      password:string;
      name:{
        firstName:string;
        middleName?:string;
        lastName:string;
      };
      dateOfBirth?:string;
      gender: "male" | "female";
      email:string;
      contactNo: string;
      emergencyContactNo: string;
      permanentAddress:string;


    }

    // creating schema using interface

  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,

    },
    role : {
      type: String,
      required: true,
    },
    password : {
      type: String,
      required: true,
    },
    name:{
      firstName:{
        type: String,
        required: true,
      },
      middleName:{
        type: String,
      },
      lastName:{
        type: String,
        required: true,
      }
    },
    dateOfBirth:{
      type: String,

    },
      gender:{
       type:String,
       enum:["male", "female"]
      },
      email:{
        type:String,
      },
      contactNo:{
        type:String,
        required:true,
      },

      emergencyContactNo: {
        type:String,
        required:true,
      },
      permanentAddress:{
        type:String,
        required:true,
      },
   
  });
    // res.send('Hello World!')
  });

  
  

export default app;