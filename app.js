const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "DevSecOps Demo Application"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});


app.get("/danger", (req, res) => {
    eval(req.query.code);

    res.send("done");
});

app.get("/danger", (req, res) => {
    eval(req.query.code);
    res.send("Done");
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});