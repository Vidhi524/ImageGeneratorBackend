const mongoose=require("mongoose");
const app = require('./app.js')

const url = "mongodb+srv://avidhi940:vidhi524@cluster0.7u1dtzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const uri ="mongodb://127.0.0.1:27017/Ai-Backend";



    // console.log("dbLink :- "+dbLink)

 
    mongoose.connect(url)
    .then(()=>console.log('______DB connected_____'))

app.listen(1400,()=>{
    console.log("http://localhost:1400")  
})


