const express = require('express');
const app = express();
let port = 3000;


const metMaterial = require("./Controladores/Cont_Material")

app.get("/materiales", metMaterial.leerMateriales);
app.get("/materiales/:Tipo", metMaterial.leerMaterial);
app.post("/materiales", metMaterial.nuevoMaterial);
app.put("/materiales/:Tipo", metMaterial.modifiMaterial);
app.delete("/materiales/:Tipo", metMaterial.eliminarMaterial);




app.listen(port, () => {

    console.log('Server listo');
  });
  