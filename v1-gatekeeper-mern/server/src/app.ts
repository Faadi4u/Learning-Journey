import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

export const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN}));

app.use(express.urlencoded({extended: true , limit: "16kb"}));

app.use(express.json({limit: "16kb"}));

app.use(cookieparser());