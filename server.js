const express = require('express');
const path = require('path');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://temp:temp@cluster0.vgwu3.mongodb.net/temp?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to DB');

        const app = express();
        app.use(express.json())
        const indexRouter = require("./src/routes");


        // enable CORS
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Methods', "DELETE,GET,HEAD,OPTIONS,POST,PUT,PATCH")
            next();
        });

        app.use("/api", indexRouter);

        if (process.env.NODE_ENV === 'production') {
            const staticfolder = path.join(__dirname, 'build');
            app.use(express.static(staticfolder));
            app.get("*", (req, res) => {
                res.sendFile(path.join(staticfolder, "index.html"));
            })
        }

        const port = process.env.PORT || 5000;

        app.listen(port, () => {
            "running server!"
        })


    }).catch(err => {
        console.log('err connecting to DB', err);
    });
