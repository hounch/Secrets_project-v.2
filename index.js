import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    let response = await axios.get("https://secrets-api.appbrewery.com/random");
    console.log(response.data);
    res.render("index.ejs", {
      secret: response.data.secret,
      user: response.data.username,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port);
