var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var objects =[
{
	val: "P",
	color: "green",
	name: "plant",
	force: 1,
	cut:1 

},
{
	val: "H",
	color: "blue",
	name: "herbivorus",
	force: 2,
	cut: 1

},
{
	val:"C",
	color: "red",
	name: "carnivorus",
	force : 3,
	cut:1

},
{
	val: "S",
	color: "grey",
	name: "stone",
	force: 4,
	cut: 1

}
];

 app.get("/", function(req, res){
 	res.sendfile("public/index.html")

 });
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

app.post("/", function(req,res){
	var randcell;
	var ord;
	var abs;
	var sended;
	var randObject;
	ord = Math.round(Math.random()*20);
	abs = Math.round(Math.random()*20);
	aleat= Math.round(Math.random()*3);
	selected= objects[aleat];
	 sended={
	 	color: selected.color,
	 	test: selected,
	 	val: selected.val,
	 	posX: ord,
	 	posY: abs,
	 }
	res.send(sended)
})

