var ecosystem=[];

//création du tableau
for (var i = 0; i < 20; i++) {
	$("#table").append('<tr data-row="'+i+'"></tr>');
	for (var j = 0; j < 20; j++) {
		$("#table tr:last-child").append('<td data-row="'+i+'"data-column="'+j+'" ></td>');
	}
};

//quand on clique envoi une demande au serveur
function generate(){	
	   $.ajax({
	        url:'http://192.168.1.137:3000',
	        type: "POST",
	        data: {
	        	age: "age",
	        	lifetime: "lifetime",
	        	force:"force",
	        	color:"color",
	        	val:"val",
	        	X:"posX",
	        	Y:"posY",
	        },
	    })
	   //quand le serveur repond, ce qui va etre fait 
	    .done(function(res) {
	    	ecosystem.push(res)
	    	$("td[data-row='"+res.posX+"'][data-column='"+res.posY+"']").css("background-color",res.color);

			aging(ecosystem);	        


	        console.log(ecosystem);
	        //console.log(res);
	        //console.log("data-row='"+res.posX+"'")
	    });
}
//timer de 500ms
var interval;	   
$("#Générer").click(function(){
	interval=setInterval(generate, 500)
});
// stopper le timer
$("#stop").click(function(){;
	clearInterval(interval)
	console.log("stop")
});

function aging(array){
	for (var i = 0; i < array.length; i++) {
		array[i].age= array[i].age+1
		if (array[i].age==array[i].lifetime){
			array.splice([i],1)
		}
		console.log(array[i].age)
	}
};


//si l'objet tombe sur une case utilisé ecrase ce qu'il y a dedans

// function crush(array){
// for (var i =0; i < array.length; i++) {
//  	if() 
	
// }
// };
