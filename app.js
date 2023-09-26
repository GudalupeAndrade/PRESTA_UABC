const express = require('express');
const app = express();
let port = 3000;


const metMaterial = require("./Controladores/Cont_Material")
const metUsuario = require("./Controladores/Cont_Usuario")
const metPrestamo = require("./Controladores/Cont_Prestamo")

app.get("/materiales", metMaterial.leerMateriales);
app.get("/materiales/:Tipo", metMaterial.leerMaterial);
app.post("/materiales", metMaterial.nuevoMaterial);
app.put("/materiales/:Tipo", metMaterial.modifiMaterial);
app.delete("/materiales/:Tipo", metMaterial.eliminarMaterial);

app.get("/usuarios", metUsuario.leerUsuarios);
app.get("/usuarios/:Matricula", metUsuario.leerUsuario);
app.post("/usuarios", metUsuario.nuevoUsuario);
app.put("/usuarios/:Matricula", metUsuario.modifiUsuario);
app.delete("/usuarios/:Matricula", metUsuario.eliminarUsuario);

app.get("/prestamos", metPrestamo.leerPrestamos);
app.get("/prestamos/:Matricula", metPrestamo.leerPrestamo);
app.post("/prestamos/:Matricula", metPrestamo.nuevoPrestamo);
app.delete("/prestamos/:Matricula", metPrestamo.eliminarPrestamo);


app.listen(port, () => {

    console.log('Server listo');
  });
  