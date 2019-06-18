const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(ejsLayouts);

var contact = {
	name: "Steve Peters",
	email: "steve@steve.com",
	phone: "206-555-1212",
	fax: "Who uses faxes anymore?",
	site: "http://steve.io"
};
const skills = [
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Node JS",
    "Express JS",
    "Crooning"
];


app.get("/", function(req, res){
    res.render('index');
})

app.get("/skills", function(req, res){
   
    res.render('skills', {skills});
})

app.get("/contact", function(req, res){
    res.render("contact",{contact});
})

app.listen(3000, function(){
    console.log("We are listening");
})