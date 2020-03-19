const express = require("express");
const fs = require("fs");
const serveIndex = require("serve-index");
const sharp = require("sharp");
const cors = require("cors");
const { sendEmail } = require("./sendEmail");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.options('*', cors());

app.use('/images', express.static('public/images'));
app.use('/images', serveIndex('public/images'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.get('/before', (req, res) => {
    fs.promises.readdir("./public/images").then(files => {
        res.send(files);
    });
});

app.post('/send', (req, res) => {
    sendEmail(req.body).then(() => {
        res.send("Success")
    }).catch(err => {
        throw err;
    });
});

app.get('/shrinker/:path', (req, res) => {
    let fileName = req.params.path;
    const fileList = fileName.split(".");
    const ext = fileList.pop();
    const nameList = fileList[0].split("~");
    const width = parseInt(nameList.pop());
    fileName = `${nameList[0]}.${ext}`;
    sharp(`./public/images/${fileName}`)
        .resize(width)
        .toBuffer()
        .then(data => {
            res.contentType(ext);
            res.send(data);
        });
});

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);