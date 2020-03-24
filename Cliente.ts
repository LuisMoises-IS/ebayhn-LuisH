import mongoose = require("mongoose");
import {connectMongoDB} from "./helpers"

export interface ICliente extends mongoose.Document { 
    name: string;
    correo: string;
    edad: number;
    direccion: string;
    telefono: string;
    sexo: string;
}

const ClienteSchema = new mongoose.Schema({
    name: { type: String, required: true},
    correo: { type: String, required: true},
    edad: { type: Number, required: true},   
    direccion: { type: String, required: true},
    telefono: { type: String, required: true},
    sexo: { type: String, required: true}
});

export const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export const CreateCliente = async function(name: string, correo: string, edad: number, direccion: string, telefono: string, sexo: string){
    await connectMongoDB;

    const newOne = new Cliente();
    newOne.name = name;
    newOne.correo = correo;
    newOne.edad = edad;
    newOne.direccion = direccion;
    newOne.telefono = telefono;
    newOne.sexo = sexo;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}

export function getCliente(_name: string):Promise<any>{
    return new Promise<any>(resolve => {
        Cliente.findOne({ name: _name}, (err:any, data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        });
    });
}