const CommitteeCollection = require('../Models/Committee.model');

exports.addCommittee = async (req, res) => {
    const data = req.body;
    try{
        const newCommittee = new CommitteeCollection(data);
        await newCommittee.save();
res.status(200).send({
            "Message": "Committee added Sucessfully.",
            "data" : newCommittee
})
    }catch(err){
        res.status(500).send({
            message : "error".err
        })
    }
};