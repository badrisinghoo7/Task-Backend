const express = require("express");
const cors = require("cors");
const { userRouter } = require("./route/userRoute");
const { taskRouter } = require("./route/taskRoute");
const { connection } = require("./db");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/task", taskRouter);
app.get("/", (req, res) => {
  res.status(200).send({
    message: "This is our Homepage",
  });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
