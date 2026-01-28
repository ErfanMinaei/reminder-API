import express from "express";
import remindersRouter from "./routers/reminders";
import { PrismaClient } from "./generated/prisma/client";

const app = express();

const prisma = new PrismaClient({});

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(8000, () => console.log("server started"));
