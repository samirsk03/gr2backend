const express = require('express')
const {deleteAllContacts, submitContact, getAllContacts} = require("../controllers/contactController");
const router = express.Router();


router.post("/submit", submitContact);
router.post("/deleteAll", deleteAllContacts);
router.get('/all', getAllContacts); // New route to fetch all contacts


module.exports = router;
