import dotenv from "dotenv";
dotenv.config();
import {app} from "./app.ts";
import { connectDB } from "./DB/index.ts";

const port = process.env.PORT || 3000;

connectDB()
.then(() => {
        app.listen(port , () => {
            console.log(`Your server is running on port : ${port}`);            
        })
    })
.catch((err) => console.log("DB fails to connect in server" , err)
)


