const usuarios = require("../Modelos/Usuario");
const nuevoUsuario = async function (req, res) {
    let nuevo = { Matricula: req.query.Matricula, Nombre: req.query.Nombre,Correo: req.query.Correo,
        Contraseña: req.query.Contraseña,Tipo: req.query.Tipo,Estado: req.query.Estado };
    await usuarios.default.push(nuevo);
    await res.json("Agregado");
}

const leerUsuarios = async function (req, res) {
    let datos = await usuarios.default;
    await res.json(datos);
}

const leerUsuario = async function (req, res) {
    let datos = await usuarios.default.find(prop => prop.Matricula === req.params.Matricula);
    if(datos == null){
        await res.json("No se encontro el Usuario");
    }else{
        await res.json(datos);
    }
}


const modificarUsuario = async function (req, res) {
    let datos = await usuarios.default.find(prop => prop.Matricula === req.params.Matricula);
    datos.Cantidad = req.query.Cantidad;
    await res.json(datos);
}


const eliminarUsuario = async function (req, res) {
    usuarios.default = await usuarios.default.filter((prop) => prop.Matricula !== req.params.Matricula);
    await res.json(usuarios.default);
}




module.exports.nuevoUsuario = nuevoUsuario;
module.exports.leerUsuarios = leerUsuarios;
module.exports.leerUsuario = leerUsuario;
module.exports.modifiUsuario = modificarUsuario;
module.exports.eliminarUsuario = eliminarUsuario;


