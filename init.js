const mongoose = require("mongoose");
const Note = require("./model/note.js");


main()
.then(()=>{
    console.log("Connection Successfull!");
})
.catch((err)=>{
    console.log(err);
});


async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}



let allnotes = [
    {
        title : "Sona hai" ,
        note : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti odit cupiditate porro ut explicabo! Asperiores unde atque harum distinctio hic nulla minima.",
        created_at : new Date(),
    },
    {
        title : "hagna hai",
        note : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos sint, consectetur, labore rem, nihil asperiores suscipit esse a excepturi recusandae enim nostrum! Voluptatem, porro.",
        created_at : new Date(),
    },
    {
        title : "Sona hai",
        note : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, animi harum? Culpa inventore, error alias pariatur vitae ipsam neque quaerat voluptatibus at, odit magnam qui aperiam modi unde amet autem",
        created_at : new Date(),
    },
];


Note.insertMany(allnotes);