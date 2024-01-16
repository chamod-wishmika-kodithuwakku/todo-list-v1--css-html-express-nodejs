//configurations
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//settigng the ejs , it should bellow the expree() app
app.set('view engine', 'ejs');
   //need to crete views folder beacuase view engine will look in this folder

const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});

//end of the configurations

//creating an array of items for use as a for loop in frontend
let items = ["eat", "sleep", "repeat"];

app.get("/",function(req,res){
    
    let today = new Date();
   
    let options ={

        weekday : "long",
        day : "numeric" ,
        month : "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    //all of the thigns should be render in 1 because it render first when page opens 
    res.render("list", {kindOfDay :day , newListItems : items}); //2 nd parameters are declaring in the below
})

app.post("/", function(req,res){

    let item = req.body.newTodo;

    items.push(item);

    res.redirect("/");   //now here its rendering again and adding items to the array
})
