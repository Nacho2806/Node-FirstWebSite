const express = require('express');

//express.Router sirve para crear múltiples rutas y mantenerlos en archivos separados
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', { title: 'First WebSite'});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact Page'});
});


module.exports = router;