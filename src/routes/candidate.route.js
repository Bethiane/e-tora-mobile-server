const express = require("express");

const { createCandidate,getCandidates,} = require("../controllers/candidate.controller");


const router = express.Router({ mergeParams: true });


router.get("/", getCandidates);


router.post("/", createCandidate);


module.exports = router;
