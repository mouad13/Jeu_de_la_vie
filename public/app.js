
for (var i = 0; i < 20; i++) {
	$("#table").append('<tr data-row="'+i+'"></tr>');
	for (var j = 0; j < 20; j++) {
		$("#table tr:last-child").append('<td data-row="'+i+'"data-column="'+j+'" ></td>');
	}
}
$("#Générer").click(function(){
	   $.ajax({
	        url:'http://192.168.1.137:3000',
	        type: "post",
	        data: {}
	    })
	    .done(function(res) {
	        console.log(res);
	    });
});
		