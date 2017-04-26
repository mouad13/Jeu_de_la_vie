for (var i = 0; i < 20; i++) {
	$("#table").append('<tr data-row="'+i+'"></tr>');
	for (var j = 0; j < 20; j++) {
		$("#table tr:last-child").append('<td data-row="'+i+'"data-column="'+j+'" ></td>');
	}
};



$("#Générer").click(function(){
	   $.ajax({
	        url:'http://192.168.1.137:3000',
	        type: "POST",
	        data: {
	        	test:"test",
	        	color:"color",
	        	val:"val",
	        	X:"posX",
	        	Y:"PosY",
	        }
	    })
	    .done(function(res) {
	    	var rustine=res.val;
	    	$("td[data-row='"+res.posX+"'][data-column='"+res.posY+"']").append(res.val);
	    	$("td[data-row='"+res.posX+"'][data-column='"+res.posY+"']").css("background-color",res.color);
	        console.log(res.color);
	        console.log(res);
	        console.log("data-row='"+res.posX+"'")
	        console.log(rustine);
	    });
});
		