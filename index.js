const express = require('express');
const app = express();

app.use(express.static(__diarname + '/public'));
#PRIMER COMENTARIO
app.get('/hola',(req,res) => {
    res.send('ruta hola');
})
#SEGUNDO COMENTARIO
app.get('/adios', (req,res) => {
    res.sed(ruta Adiós);
})

app.post('/login',(req,res) => {
    res.send('ruta de login nueva');
});

app.listen(3000,() => {
    console.log('Example app listening on port 3000!');
}
);