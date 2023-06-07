const lead = require("../models/lead");
const { postLead, getLeads } = require("../services/lead");
const HttpError = require("../Exceptions/http-error");

const addLead = async (req, res, next) => {

    const newLead = new lead({
        email: req.body.email,
        name: req.body.name,
        message: req.body.message
    });

    try {
        await postLead(newLead);

        res.json({
            data: newLead
        });

    } catch (err) {
        console.log(err);
        return next(new HttpError('Failed to post lead', 500));
    }
}

const fetchLeads = async (req, res, next) => {

    const count = parseInt(req.query.count);
    const skip = parseInt(req.query.skip);
    try {
        const leads = await getLeads(count, skip);

        res.json({
            data: leads
        });

    } catch (err) {
        console.log(err);
        return next(new HttpError('Failed to get leads', 500));
    }
}

exports.postLead = addLead;
exports.getLeads = fetchLeads;