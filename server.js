var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var randcell;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var objects =[plant, herbivore, carnivore, stone];
var plant ={
	val: "P",
	name: "plant",
	force: 1,
	cut:1 

};
var herbivore={
	val: "H",
	name: "herbivorus",
	force: 2,
	cut: 1

};
var carnivore={
	val:"C",
	name: "carnivorus",
	force : 3,
	cut:1

};
var stone={
	val: "S",
	name: "stone",
	force: 4,
	cut: 1

};

 app.get("/", function(req, res){
 	res.sendfile("public/index.html")

 });
app.post("/", function(req,res){
	res.send(createObject)
})
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

function createObject (){
	ord = MathRound(MathRandom()*20);
	abs = MathRound(MathRandom()*20);
	randcell = $("td[data-row='"+ord+"'][data-column ='"+abs+"']")
	
	randObject= MathRound(MathRandom()*4);
	console.log(randcell.append(objects[randObject].val))



}
