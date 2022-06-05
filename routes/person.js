const router = require('express').Router()
const multer = require('multer')

const PersonController = require('../controllers/person')

let upload = multer({})

router.get('/', PersonController.getAllPersonsPage)

router.get('/new', PersonController.createPersonPage)

router.get('/view/:person_id', PersonController.getPersonPage)

router.get('/goto-update', PersonController.getGotoUpdatePage)

router.get('/update', PersonController.updatePersonPage)

router.post('/update/:person_id', PersonController.updatePerson)

router.post('/new', upload.single('photo'), PersonController.createPerson)

router.get('/remove/:person_id', PersonController.removePerson)



module.exports = router