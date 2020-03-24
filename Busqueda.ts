import mongoose = require("mongoose");
import {IProducts, getProducto} from "./Productos"
import {ICliente, getCliente} from "./Cliente"
import {connectMongoDB} from "./helpers"

interface IBusqueda extends mongoose.Document {
    producto: IProducts;
    cliente: ICliente;

}

const BusquedaSchema = new mongoose.Schema({
    producto: {type: mongoose.Schema.Types.ObjectId, ref: "Producto"},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: "Cliente"}
});

export const Busqueda = mongoose.model<IBusqueda>("Busqueda", BusquedaSchema);

export const CreateBusqueda = async function(nameProducto: string, namecliente: string){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el producto en funcion del nombre
    const prod:any = await getProducto(nameProducto);

    //Obtener el cliente en funcion del nombre
    const cli:any = await getCliente(namecliente);

    //persistencia de nuestra busqueda
    const b = new Busqueda();
    b.producto = prod;
    b.cliente = cli;

    b.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(b);
        }
    });
}