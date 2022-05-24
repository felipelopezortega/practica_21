const express = require("express"); //se inyecta la dependencia de express
const router = express.Router(); // se crea una constante de una propiedad de express, router
const mongoose = require("../node_modules/mongoose"); // se inyecta la dependencia de mongoose, la base de datos
let Person = require("../models/person"); //se define una variable "Person"

//primer ruta, para mostrarnos el contenido de nuestra base de datos
router.get("/persons", function(req,res, next){ 
    Person.find(function(err,persons){
        if(err) return next(err);
        res.json(persons);
    });
})

//segunda ruta, es un renderizado del formulario 
router.get("/person", function(req,res){

    res.render("person");
});

//primera ruta post, para guardar los datos llenados en el formulario
router.post("/personssend",function (req, res) {

    const myPerson = new Person ({
    nss: req.body.nss,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre
    });
    myPerson.save();
})




module.exports = router