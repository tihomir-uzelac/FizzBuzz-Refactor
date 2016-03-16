$(document).ready(function() {

var randomNumber = prompt ("Please enter random number");
var intNumber = parseInt(randomNumber, 10);


for (count = 1; count <=intNumber; count++) {
	
	var result = "";
	
	if (count % 3 == 0) result += "Fizz";
	if (count % 5 == 0) result += "Bizz";
	if (result == 0) result = count;

	
$("#lista").append("<li>" + result + "</li>")
 
 }
});
