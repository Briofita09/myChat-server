import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import "dotenv/config";
import { userRouter } from "./routes/userRouter/userRouter.js";
import { channelRouter } from "./routes/channelRouter.js";

const app = express();
const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

app.use(cors()).use(express.json()).use(userRouter).use(channelRouter);

export { serverHttp, io };
