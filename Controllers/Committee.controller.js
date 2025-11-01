const CommitteeCollection = require('../Models/Committee.model');
const ProjectCollection = require('../Models/Project.model'); // Assuming you have this

// Add Committee to a Project (Only by Chairperson)
exports.addCommittee = async (req, res) => {
    const { projectId, CName, Description, Members } = req.body;
    const userId = req.user?.id; // From authentication middleware

    try {
      /*  if(projectId && userId){
        // Check if user is chairperson of the project
        const project = await ProjectCollection.findById(projectId);
        
        if (!project) {
            return res.status(404).send({
                message: "Project not found"
            });
        }

        if (project.Chairperson.toString() !== userId) {
            return res.status(403).send({
                message: "Only chairperson can add committees"
            });
        }
        } */

        const newCommittee = new CommitteeCollection({
            CName,
            ProjectId: projectId,
            Description,
            Members: Members || []
        });

        await newCommittee.save();
        
        res.status(200).send({
            message: "Committee added successfully",
            data: newCommittee
        });     
    } catch(err) {
        res.status(500).send({
            message: err.message
        });
    }
};

// Get all committees for a specific project
exports.getCommitteesByProject = async (req, res) => {
    const { projectId } = req.params;
    
    try {
        const committees = await CommitteeCollection.find({ ProjectId: projectId })
            .populate('Members.UserId', 'name email')
            .populate('Coordinator', 'name email');
            
        res.status(200).send({
            message: "Committees retrieved successfully",
            data: committees
        });
    } catch(err) {
        res.status(500).send({
            message: err.message
        });
    }
};

// Add member to committee (Only by Chairperson)
exports.addMember = async (req, res) => {
    const { id } = req.params; // Committee ID
    const { userId, userName, role } = req.body;
    const currentUserId = req.user.id;
    
    try {
        const committee = await CommitteeCollection.findById(id).populate('ProjectId');
        
        if (!committee) {
            return res.status(404).send({
                message: 'Committee not found'
            });
        }

        // Check if current user is chairperson
        if (committee.ProjectId.Chairperson.toString() !== currentUserId) {
            return res.status(403).send({
                message: "Only chairperson can add members"
            });
        }

        // Check if member already exists
        const memberExists = committee.Members.some(
            member => member.UserId.toString() === userId
        );

        if (memberExists) {
            return res.status(400).send({
                message: 'Member already exists in this committee'
            });
        }

        committee.Members.push({
            UserId: userId,
            UserName: userName,
            Role: role || 'Member'
        });

        await committee.save();

        res.status(200).send({
            message: 'Member added successfully',
            data: committee
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

// Remove member from committee
exports.removeMember = async (req, res) => {
    const { id } = req.params; // Committee ID
    const { userId } = req.body;
    const currentUserId = req.user.id;
    
    try {
        const committee = await CommitteeCollection.findById(id).populate('ProjectId');
        
        if (!committee) {
            return res.status(404).send({
                message: 'Committee not found'
            });
        }

        // Check if current user is chairperson
        if (committee.ProjectId.Chairperson.toString() !== currentUserId) {
            return res.status(403).send({
                message: "Only chairperson can remove members"
            });
        }

        committee.Members = committee.Members.filter(
            member => member.UserId.toString() !== userId
        );

        await committee.save();

        res.status(200).send({
            message: 'Member removed successfully',
            data: committee
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
};

// View committee details
exports.getCommitteeById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const committee = await CommitteeCollection.findById(id)
            .populate('Members.UserId', 'name email role')
            .populate('Coordinator', 'name email')
            .populate('ProjectId', 'ProjectName');
            
        if (!committee) {
            return res.status(404).send({
                message: 'Committee not found'
            });
        }

        res.status(200).send({
            message: "Committee retrieved successfully",
            data: committee
        });
    } catch(err) {
        res.status(500).send({
            message: err.message
        });
    }
};

// Get committees where user is a member
exports.getUserCommittees = async (req, res) => {
    const userId = req.user.id;
    
    try {
        const committees = await CommitteeCollection.find({
            'Members.UserId': userId
        }).populate('ProjectId', 'ProjectName');
        
        res.status(200).send({
            message: "User committees retrieved successfully",
            data: committees
        });
    } catch(err) {
        res.status(500).send({
            message: err.message
        });
    }
};

exports.getCommittees = async (req, res) => {
   try{
        const committees = await CommitteeCollection.find()
            .populate('Members.UserId', 'name email')
            .populate('ProjectId', 'ProjectName');
        res.status(200).send({
            message: "Committees received successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err.message
        });
    }
};

exports.getCommitteesByID = async (req, res) => {
    const id = req.params.id;
    try{
        const committees = await CommitteeCollection.findById(id)
            .populate('Members.UserId', 'name email')
            .populate('Coordinator', 'name email');
        res.status(200).send({
            message: "Committees received successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err.message
        });
    }
};

exports.getCommitteesByName = async (req, res) => {
    const name = req.params.name;
    try{
        const committees = await CommitteeCollection.find({'CName':name})
            .populate('ProjectId', 'ProjectName');
        res.status(200).send({
            message: "Committees received successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err.message
        });
    }
};

exports.getCommitteesByCoordinator = async (req, res) => {
    const Coname = req.params.Coname;
    try{
        const committees = await CommitteeCollection.find({'Coordinator':Coname})
            .populate('ProjectId', 'ProjectName');
        res.status(200).send({
            message: "Committees received successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err.message
        });
    }
};

exports.getCommitteesByMemCount = async (req, res) => {
    const Count = req.params.Count;
    try{
        const committees = await CommitteeCollection.find({'MemberCount':Count})
            .populate('ProjectId', 'ProjectName');
        res.status(200).send({
            message: "Committees received successfully",
            data: committees
        });
    }
    catch(err){
        res.status(500).send({
            message : err.message
        });
    }
};