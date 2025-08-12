const express = require('express');
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('API de Hora en Express');
});

// Ruta que devuelve la hora actual
app.get('/api/time', (req, res) => {
    const now = new Date();
    res.json({
        hora: now.toLocaleTimeString(),
        fecha: now.toLocaleDateString()
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
