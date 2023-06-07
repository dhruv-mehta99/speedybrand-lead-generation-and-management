const express = require('express');
const router = express.Router();

const leadControllers = require("../controllers/lead");

// Post new lead in db
router.post("/", leadControllers.postLead);

// get all leads from db
router.get("/", leadControllers.getLeads);


module.exports = router;