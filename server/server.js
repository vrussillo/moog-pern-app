const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/account", require("./routes/account"));

app.use("/templates", require("./routes/account"));
app.use("/templates/dark", require("./routes/account"));
app.use("/templates/lbd", require("./routes/account"));
app.use("/templates/md", require("./routes/account"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
