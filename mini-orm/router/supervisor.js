let express = require('express');
let router = express.Router();
let supevisor = require('../models/supervisor')


router.get('/', (req,res) => {
    supevisor.findAll()
    .then(supervisor => {
        res.render('supevisor' , {data : supevisor, title : 'Halaman supevisor'})
    })
        

})
// router.get('/', (req, res)=>{
//     supevisor.findAll(() => {
//     Model_supervisor.getAll()
//         .then(supervisor => {
//             res.render('supevisor', {data: supervisor }) 
//         })
//         .catch(err => {
//         console.log(err);
//             res.render('error_page')
//         })
//     })
// })
module.exports = router;