const { request } = require('express');
const express = require("express");
const app = express();
const PORT = 9000;
const morgan = require("morgan");
const usersRoutes = require("./routes/users.routes");
const { json } = require('express/lib/response');

app.use(express.json())
app.use(morgan("tiny"));
app.use(usersRoutes);


app.listen(PORT, () =>  {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});



