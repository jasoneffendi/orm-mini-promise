let express = require('express');
let router = express.Router();
let project = require('../models/project.js')


router.get('/', (req,res) => {
    project.findAll(()=> {
        res.render('project' , {data : project, title : 'Halaman Project'})
    })
})
// router.get('/', (req, res)=>{
//     project.findAll(() => {
//     Model_supervisor.getAll()
//         .then(supervisor => {
//             res.render('project', {data: supervisor }) 
//         })
//         .catch(err => {
//         console.log(err);
//             res.render('error_page')
//         })
//     })
// })
module.exports = router;