import mongoose from "mongoose";
import app from "./app";

//server port
const port: number = 5000;

//mongoose connection
const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("db connecting successfully");

    app.listen(port, () => {
      console.log("Server is listening on PORT:", port);
    });
  } catch (error) {
    console.log("db connection failed", error);
  }
};
bootstrap();
