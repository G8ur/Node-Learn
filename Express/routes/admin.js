const express = require('express')
// creating routes 
const router  = express.Router()
// /admin/adds => GET
router.use('/adds',(req,res,next) =>{
    res.send("<html><form action='/admin/product' method='POST'><input type='text' name ='title'><button type='submit'>Add</button></form></html>")  // for form always specify action i.e path 
}) // here admin/product in  form action as this is the correct path it should follow

// /admin/product => GET
router.post('/product' ,(req,res,next) =>{  // the url on which form performs action and now it is the process at which form performs action so here we gave a redirect i.e on addi go to this page
    console.log(req.body)
    res.redirect('/')
})   // so that if no value passed direct redirect without giving any value


module.exports = router