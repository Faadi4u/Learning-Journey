import {config} from "dotenv";
config();
import {app} from "./app.ts";

const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`Your server is running on port: ${port}`);
});
