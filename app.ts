import {CreateProveedor} from "./Proveedores"
import {CreateProduct} from "./Productos"
import {CreateCliente} from "./Cliente"
import {CreateBusqueda} from "./Busqueda"

CreateProveedor("Uayeb","Tegucigalpa Honduras","1")

CreateProduct("Uayeb","Celular Samsung s20", 800, 1000, 100);

CreateCliente("Luis", "luismoises@example.com",28,"tegucigalpa, Honduras", "9999-0000", "masculino");

CreateBusqueda("Celular Samsung s20", "Luis");


