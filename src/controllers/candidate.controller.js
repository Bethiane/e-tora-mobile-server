const { Candidate, validateData } = require("../model/candidate");

//create a candidate
exports.createCandidate = async (req, res) => {
  try {
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let candidate = new Candidate({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      telephone: req.body.telephone,
      nationalId: req.body.nationalId,
      partyId:req.body.partyId
      
    });

    candidate = await candidate.save();
    res.send(candidate);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

// GET /Candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.send(candidates);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};


