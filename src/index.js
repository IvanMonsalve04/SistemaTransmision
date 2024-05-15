const http = require('./app');

http.listen(4000, '127.0.0.1', () => {
    console.log('Servidor corriendo en el puerto 4000');
})