import mongoose = require("mongoose");
import {IProveedor, getProveedor, Proveedor} from "./Proveedores"
import {connectMongoDB} from "./helpers"

export interface IProducts extends mongoose.Document { 
    name: string;
    precio_venta: number;
    precio_compra: number;
    cantidad: number;
    proveedor: IProveedor
}

const ProductoSchema = new mongoose.Schema({
    name: { type: String, required: true},
    precio_venta: {type: Number, required: true},
    precio_compra: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" }
});


export const Producto = mongoose.model<IProducts>("Producto", ProductoSchema);

export const CreateProduct = async function(nameProveedor:string, name:string, precio_compra:number,precio_venta:number,cantidad:number){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el proveedor en funcion del nombre
    const prov:any = await getProveedor(nameProveedor);

    //persistencia de nuestro producto
    const p = new Producto();
    p.name = name;
    p.precio_compra = precio_compra;
    p.precio_venta = precio_venta;
    p.cantidad =  cantidad;
    p.proveedor = prov;

    p.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(p);
        }
    });
}

export function getProducto(_name: string):Promise<any>{
    return new Promise<any>(resolve => {
        Producto.findOne({ name: _name}, (err:any, data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        });
    });
}
