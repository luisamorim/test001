require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3000;

const routes = require("./routes");
routes(app);

app.listen(port, () => {
  console.log("server is running.");
});
