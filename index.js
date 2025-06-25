const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Note = require("./model/note.js");


app.set("views" , path.join(__dirname , "views"));
app.set("view engine" ,"ejs");

app.use(express.static(path.join(__dirname , "public")));

app.use(express.urlencoded({extended : true}));

app.use(methodOverride("_method"));



main()
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/notesapp');
}


// View Notes

app.get("/notes" , async (req,res)=>{
       let notes = await Note.find();
       res.render("index.ejs" , {notes});
});



// Create Note

app.get("/notes/new" , (req,res)=>{
    res.render("new.ejs");
});

app.post("/notes" ,async (req,res)=>{
     let {title , note} = req.body;
     let date = new Date();

     let newNote = new Note({ title, note, created_at: date });
     await newNote.save();

     res.redirect("/notes");
})



// Edit / Update note


app.get("/notes/:id/edit" , async (req,res)=>{
       let {id} = req.params;
     
       let note = await Note.findById(id);

       res.render("edit.ejs" , {note});
})


app.put("/notes/:id" , async (req,res)=>{
     let {id} = req.params;
     let {title : newtitle , note : newnote} = req.body;

     await Note.findByIdAndUpdate( id,{title : newtitle , note : newnote , created_at : new Date()} , {runValidators : true} , {new : true});

     res.redirect("/notes");

})


// Delete all 

app.delete("/notes", async (req, res) => {
  console.log("✅ delall route HIT");
  await Note.deleteMany({});
  res.redirect("/notes");
});





// Delete


app.delete("/notes/:id", async (req, res) => {
        let {id} = req.params; 

        await Note.findByIdAndDelete(id);
        res.redirect("/notes");
})






app.get("/" , (req,res)=>{
    res.redirect("/notes");
});



app.listen("8080" , ()=>{
    console.log("Port Listening to 8080");
});



