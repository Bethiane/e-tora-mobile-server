const { Party, validateData } = require("../model/party");


exports.createParty = async (req, res) => {
    try {
        const { error } = validateData(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let party = new Party({
            name: req.body.name,
            slogan: req.body.slogan,
            doc: req.body.doc,
        });

        party = await party.save();
        res.send(party);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}


exports.getParties = async (req, res) => {
    try {
        const parties = await Party.find();
        res.send(parties);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

