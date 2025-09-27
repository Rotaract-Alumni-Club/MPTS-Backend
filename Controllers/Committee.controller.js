const CommitteeCollection = require('../Models/Committee.model');
const { param } = require('../Routes/Committee.route');

exports.addCommittee = async (req, res) => {
    const data = req.body;
    try{
        const newCommittee = new CommitteeCollection(data);
        await newCommittee.save();
res.status(200).send({
            "Message": "Committee added Sucessfully.",
            "data" : newCommittee
});     
}catch(err){
        res.status(500).send({
            message : err
        });
    }
};

exports.getCommittees = async (req, res) => {
   try{
        const committees = await CommitteeCollection.find();
        res.status(200).send({
            message: "Committees recieved successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err
        });
    }
};

exports.getCommitteesByID = async (req, res) => {
    const id = req.params.id;
    try{
        const committees = await CommitteeCollection.findById(id);
        res.status(200).send({
            message: "Committees recieved successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err
        });
    }
};

exports.getCommitteesByName = async (req, res) => {
    const name = req.params.name;
    try{
        const committees = await CommitteeCollection.find({'CName':name});
        res.status(200).send({
            message: "Committees recieved successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err
        });
    }
};

exports.getCommitteesByCoordinator = async (req, res) => {
    const Coname = req.params.Coname;
    try{
        const committees = await CommitteeCollection.find({'Coordinator':Coname});
        res.status(200).send({
            message: "Committees recieved successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err
        });
    }
};

exports.getCommitteesByMemCount = async (req, res) => {
    const Count = req.params.Count;
    try{
        const committees = await CommitteeCollection.find({'MemberCount':Count});
        res.status(200).send({
            message: "Committees recieved successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err
        });
    }
};