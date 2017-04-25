var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var objects =[plant, herbivore, carnivore, stone];
var plant ={
	name : plant,
	force : 1,
	cut :1 

};
var herbivore={
	name : herbivorus,
	force : 2,
	cut: 1

};
var carnivore={
	name : carnivorus,
	force : 3,
	cut:1

};
var stone={
	name : stone,
	force : 4
	cut: aleat

};

// app.post("/", function(req, res){

	
// })

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

function createObject (){
	ord = MathRound(MathRandom()*20);
	abs = MathRound(MathRandom()*20);




}
