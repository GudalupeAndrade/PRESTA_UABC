const materiales = require("../Modelos/Material");
const nuevoMaterial = async function (req, res) {
    let nuevo = { Tipo: req.query.Tipo, Cantidad: req.query.Cantidad };
    await materiales.default.push(nuevo);
    await res.json("Agregado");
}
const leerMateriales = async function (req, res) {
    let datos = await materiales.default;
    await res.json(datos);
}

const leerMaterial = async function (req, res) {
    let datos = await materiales.default.find(prop => prop.Tipo === req.params.Tipo);
    if(datos == null){
        await res.json("No se encontro el Material");
    }else{
        await res.json(datos);
    }
}


const modificarMaterial = async function (req, res) {
    let datos = await materiales.default.find(prop => prop.Tipo === req.params.Tipo);
    datos.Cantidad = req.query.Cantidad;
    await res.json(datos);
}


const eliminarMaterial = async function (req, res) {
    materiales.default = await materiales.default.filter((prop) => prop.Tipo !== req.params.Tipo);
    await res.json(materiales.default);
}




module.exports.nuevoMaterial = nuevoMaterial;
module.exports.leerMateriales = leerMateriales;
module.exports.leerMaterial = leerMaterial;
module.exports.modifiMaterial = modificarMaterial;
module.exports.eliminarMaterial = eliminarMaterial;


