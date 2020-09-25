
const mongoose = require("mongoose");

const VolunteerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    volunteerEmail: String,
    volunteerLocation: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User'}
}, {timestamp: true});

VolunteerSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

// export model user with VolunteerSchema
module.exports = mongoose.model("Volunteer", VolunteerSchema);