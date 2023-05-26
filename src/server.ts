
import mongoose from "mongoose";
import app from "./app";

// declaring the port number
const port: number = Number(process.env.PORT) || 5000;


//database connection
async function bootstrap() {
  try {
    // mongodb+srv://rollers-republic:BAVCkousutgI8TyR@rollersrepublic.opkzibp.mongodb.net/?retryWrites=true&w=majority"
    // mongodb+srv://rollers-republic:BAVCkousutgI8TyR@rollersrepublic.opkzibp.mongodb.net/
  await mongoose.connect("mongodb+srv://rollers-republic:BAVCkousutgI8TyR@RollersRepublic.opkzibp.mongodb.net/RollersRepublic");
    console.log("Data base connection successful!");
    // console.log({dbInfo});
    

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

bootstrap();


