
for (var i = 0; i < 20; i++) {
	$("#table").append('<tr data-row="'+i+'"></tr>');
	for (var j = 0; j < 20; j++) {
		$("#table tr:last-child").append('<td data-row="'+j+'"data-column="'+j+'" ></td>');
	}
}