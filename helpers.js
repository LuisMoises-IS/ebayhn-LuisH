"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = "mongodb+srv://administrator:Soporteit2020@cluster0-crj8l.azure.mongodb.net/test?retryWrites=true&w=majority";
exports.connectMongoDB = new Promise(function (resolve) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
