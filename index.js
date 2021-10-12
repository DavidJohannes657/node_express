const express = require('express')
const app = express()
const port = 3002
//directorio publico
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
//definir con que motor de plantilla trabajar
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views' )

app.get('/', (req, res) => {
  //res.send('Estas en la raiz de la aplicacion')
  //dirname detecta la ruta-raiz del proyecto
  //console.log(__dirname )
  res.render('index',{titulo:'este es el titulo de la pagina'})

})

app.get('/productos', (req, res) => {
    //res.send('Estas en la seccion productos!')
    res.render('producto',{
      titulo:"pagina de productos",
      descripcion:"descripcion"
    })
  })

  app.get('/informacion', (req, res) => {
    //res.send('Estas en la seccion productos!')
    res.render('informacion',{
      contacto:"Contacto",
      telefono:"3152993090-3212101690",
      correo:"pachoj72@gmail.com-jdpachon95@misena.edu.co",
      edad:"18",
      name:"Juan David Pachon",
      estudios:"Tecnologo,Tecnico,Ingles B1"
    })
  })
  app.get('/tecnologia', (req, res) => {
    //res.send('Estas en la seccion productos!')
    res.render('tecnologia',{
      titulo:"Tecnologias"
    })
  })
  app.get('/experiencia', (req, res) => {
    //res.send('Estas en la seccion productos!')
    res.render('experiencia',{
     
    })
  })


app.use((req,res,next)=>{
  //validar estado de una peticion
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Puede ver la aplicacion haciendo click aqui http://localhost:${port}`)
})