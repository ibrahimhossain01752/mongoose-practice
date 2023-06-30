// import express from 'express';
import mongoose from 'mongoose';
import app from './app';
// import cors from 'cors';


const port:number = 5000;

//database connection


async function bootstrap() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log(`Database connection successfully`);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
bootstrap()



