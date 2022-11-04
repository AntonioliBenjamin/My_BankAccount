require("dotenv").config();
import * as express from "express";
const app = express();
const port = process.env.PORT
import { userRouter } from "./api/routes/profile";
import { bankAccountRouter } from "./api/routes/bankAccount";

app.use(express.json());

app.use("/user", userRouter);

app.use("/bankAccount", bankAccountRouter);

app.use("/bankAccount", bankAccountRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//ok