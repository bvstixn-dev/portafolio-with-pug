const express = require("express");

const router = express.Router();

const datos = require('../data/datos.json');


router.get('/', (req,res) => {
    res.render('index', { 
        nombre: datos.nombre,
        proyectos: datos.proyectos
    });

});

router.get('/about', (req, res) => {
    res.render('about', { 
        datos: datos.nombre,
        actitudes: datos.actitudes});
});

router.get('/cv', (req, res) => {
    res.render('cv', {
        educacion: datos.educacion
    });
});

router.get('/projects', (req, res) => {
    res.render('projects', {
        proyectos: datos.proyectos
    });
});


router.get('/contact', (req, res) => {
    res.render('contact');

});

//404
router.use((req, res) => {
    res.status(404).render('404');
});


module.exports = router;





