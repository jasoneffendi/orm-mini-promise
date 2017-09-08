let express = require('express');
let router = express.Router();
let view = require('../models/view')


router.get('/', (req,res) => {
    res.render('view' ,{data : view, title : 'Halaman'})
    // project.findAll(()=> {
       
    //     // res.render('project' , {data : project, title : 'Halaman Project'})
    // })
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