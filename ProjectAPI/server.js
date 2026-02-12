const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
    console.log("Stiglo", req.body);
    res.json({ success: true, poruka: "API radi!" });
});

app.listen(3001, () => {
    console.log("API radi an http://localhost:3001");
});