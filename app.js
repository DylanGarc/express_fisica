const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT

hbs.registerPartials(__dirname + '/views', function (err){});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');



app.get('/', (req, res) => {
    res.render('peso2',{
        nombre:'peso2'
    })
});






app.listen(port,()=>{
    console.log(`escuchando al puerto ${port}`)
}) 

