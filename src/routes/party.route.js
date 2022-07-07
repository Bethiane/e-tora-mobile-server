const express = require("express");


const { createParty,getParties,} = require("../controllers/party.controller");


const router = express.Router({ mergeParams: true });


router.get("/", getParties);


router.post("/create",createParty);


module.exports = router;