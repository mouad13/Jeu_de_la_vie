var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//creation des objects plantes, carnivore, herbivore et pierre, contenu dans un tableau
var objects =[
{
	val: "P",
	color: "green",
	name: "plant",
	force: 10,
	age: 0,
	lifetime:100000000,
	cut:1 

},
{
	val: "H",
	color: "blue",
	name: "herbivorus",
	force: 2,
	age: 0,
	lifetime: 30,
	cut: 1

},
{
	val:"C",
	color: "red",
	name: "carnivorus",
	force : 3,
	age: 0,
	lifetime: 15,
	cut:1

},
{
	val: "S",
	color: "grey",
	name: "stone",
	force: 4,
	age: 0,
	lifetime: 10000000000000000000000000,
	cut: 1

}
];
//creation du chemin pour afficher l'index.html
 app.get("/", function(req, res){
 	res.sendfile("public/index.html")

 });
//pour utiliser les fichier statiques liés au html, (app.js et style.css)
app.use(express.static('public'));
// creation du port
app.listen(3000, function(){
	console.log("yipikay!")
});
//quand on reçoit un post creation d'un objet aléatoire dans un espace aléatoire(x et y)
app.post("/", function(req,res){
	var randcell;
	var ord;
	var abs;
	var sended;//objet à envoyer
	var randObject;
	//creation des coordonées,x et y, aléatoires
	ord = Math.round(Math.random()*20);
	abs = Math.round(Math.random()*20);
	//choix aléatoire de l'objet
	aleat= Math.round(Math.random()*3);
	selected= objects[aleat];
	 sended={
	 	age: selected.age,
	 	lifetime: selected.lifetime,
	 	force: selected.force,
	 	color: selected.color,
	 	val: selected.val,
	 	posX: ord,
	 	posY: abs,
	 }
	 //resultat quand tout est fini, envoi de l'objet sur le html
	res.send(sended)
})

function aging(array){
	for (var i = 0; i < array.length; i++) {
		array[i].age++
		console.log(array[i].age)
	}
}
