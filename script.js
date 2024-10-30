$(document).ready(function(){
	$("#getValue").on("click", function(){
		var selectedValue = $("#select1").val();
		if (selectedValue) {
		                    window.location.href = selectedValue;
		                } else {
		                    alert("Please select a destination.");
		                }
	});
});