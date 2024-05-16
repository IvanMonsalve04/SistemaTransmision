const http = require('./app');

http.listen(4000, '0.0.0.0', () => {
    console.log('Servidor corriendo en el puerto 4000');
})