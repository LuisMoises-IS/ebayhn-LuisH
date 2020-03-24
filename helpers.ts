import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://administrator:Soporteit2020@cluster0-crj8l.azure.mongodb.net/test?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
