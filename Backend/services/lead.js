const lead = require("../models/lead");

const postLead = async (lead) => {

    try {
        await lead.save();
        console.log("lead saved");
    } catch (err) {
        console.log(err);
        throw new HttpError('Failed to post lead', 500);
    }

    return lead;
}

const getLeads = async (count, skip) => {
    try {
        if (count && skip) {
            return await lead.find().limit(count).skip(skip).exec();
        } else if (count) {
            return await lead.find().limit(count).exec();
        } else {
            return await lead.find()
        }
    } catch (err) {
        console.log(err);
        throw new HttpError('Something went wrong', 500);
    }
}

exports.postLead = postLead;
exports.getLeads = getLeads;