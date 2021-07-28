const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("MongoDB Connected!");
}).catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 80, () => {
    console.log("Backend server is running!");
});