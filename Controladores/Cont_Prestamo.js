const prestamos = require("../Modelos/Prestamo");
const nuevoPrestamo = async function (req, res) {
    let nuevo = { Matricula: req.params.Matricula, Material: req.query.Material,
        Descripcion: req.query.Descripcion, Cantidad: req.query.Cantidad, Estado: req.query.Estado};
    await prestamos.default.push(nuevo);
    await res.json("Agregado");
}




const leerPrestamos = async function (req, res) {
    let datos = await prestamos.default;
    await res.json(datos);
}

const leerPrestamo = async function (req, res) {
    let datos = await prestamos.default.find(prop => prop.Matricula === req.params.Matricula);
    if(datos == null){
        await res.json("No se encontro el Prestamo");
    }else{
        await res.json(datos);
    }
}



const eliminarPrestamo = async function (req, res) {
    prestamos.default = await prestamos.default.filter((prop) => prop.Matricula !== req.params.Matricula);
    await res.json(prestamos.default);
}




module.exports.nuevoPrestamo = nuevoPrestamo;
module.exports.leerPrestamos = leerPrestamos;
module.exports.leerPrestamo = leerPrestamo;
module.exports.eliminarPrestamo = eliminarPrestamo;


