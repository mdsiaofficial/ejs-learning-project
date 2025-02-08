const express = require("express")
const app = express();
const path = require("path");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  return res.render("index", { message: "First ejs message", name: "ashiq" });
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});