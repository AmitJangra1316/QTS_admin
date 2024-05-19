const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    description: {
        type: String,
        required: true 
    },
    assignedUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User' 
        }
    ]
});

exports.Project = mongoose.model('Project', projectSchema);