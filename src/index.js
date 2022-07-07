const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDb = require("./config/db");
const candidatesRoute = require("./routes/candidate.route");
const userRoute = require("./routes/user.route");
const partyRoute = require("./routes/party.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDb();

app.use("/api/candidates", candidatesRoute);
app.use("/api/user", userRoute);
app.use("/api/parties", partyRoute);
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
