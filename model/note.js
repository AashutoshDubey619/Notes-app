const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title : {
        type : String,
        maxLength : 200,
    },
    note : {
        type : String,
        required : true,
        minLength : 5,
    },
    created_at : {
        type : Date,
    }
});


const Note = mongoose.model("Note" , notesSchema);

module.exports = Note;
