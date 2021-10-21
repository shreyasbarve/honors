const express = require("express");
const mongoose = require("mongoose");
const customerRouter = require("./routes/customer.js");
const cors = require("cors");

const app = express();
const PORT = 5000 || process.env.PORT;
app.use(cors());
app.use(express.json());

// For Offline DB
// const uri = "mongodb://127.0.0.1:27017/customers";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;

// connection.once("open", () =>
//   console.log("MongoDB connection successfully extablished")
// );
// app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

// For Atlas
const URL =
  "mongodb+srv://Timoso:9GyaGqz1Df54wnvt@mongodbtutorial.txgfj.mongodb.net/honorspractice?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

app.use("/customers", customerRouter);
