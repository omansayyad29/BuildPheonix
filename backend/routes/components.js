const express = require('express')
const { createComponent,
    getComponent,
    getComponents,
    deleteComponent,
    updateComponent } = require('../controllers/componentController')
const router = express.Router()

//this is to get all components
router.get('/', getComponents)
//this is to get a single componets 
router.get('/:id', getComponent)
//this is for post new components
router.post('/', createComponent)
//this is for DELETE  components
router.delete('/:id',deleteComponent)

//this is for update components
router.patch('/:id',updateComponent)
module.exports = router