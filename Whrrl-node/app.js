const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const router = require("./routes/users_routes");
const cors = require("cors");
const path = require('path');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });


var corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.json())

mongoose
    .connect("mongodb://localhost:27017/Whrrl", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(3000, () => {
            console.log("Server is listening at PORT 3000");
        });
    })
    .catch((err) => {
        console.log("ERROR", err);
    });

app.post('/api/upload', multipartMiddleware, (req, res) => {
    console.log(req.files.fileKey.path);
    // console.log(req.files);
    app.set('filePath', req.files.fileKey.path);
    res.json({
        'message': 'File uploaded succesfully.'
    });
});
app.use(router);
