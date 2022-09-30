const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));


//Rutas
app.use(require('./routers/listado.route'))

//servidor activo
app.listen(4000, () => {
    console.log('Server en el puertoO', 4000);
});