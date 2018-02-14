
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text2 = text2+":$"+sizeTotal+"<br>";
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	getTotals(runningTotal,text1,text2);

};	


function getTotals(runningTotal,text1, text2) {

// Meat!
	var meatTotal = 0;
	var selectedMeat = [];
	var i = 0;
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0;  j < meatArray.length; j++) {
		
		if (meatArray[j].checked && i == 0) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
			text2 = text2+":$0"+"<br>";
			i++;
			j++;
}
		 if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
			text2 = text2+"$1"+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("subtotal: $"+runningTotal+".00");

// Cheese!
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			var selectedCheese = cheeseArray[c].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	text2 = text2+"$"+cheeseTotal+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("subtotal: $"+runningTotal+".00");

// Crust!
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	text2 = text2+"$"+crustTotal+"<br>";
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("subtotal: $"+runningTotal+".00");


// Sauce!
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			selectedSauce = sauceArray[i].value;	
		}
	}
	text2 = text2+"$0"+"<br>";
	text1 = text1+selectedSauce+"<br>";
	console.log("selected sauce: "+selectedSauce);

// Veggies!
	var veggieTotal = 0;
	var selectedVeggie = [];
	var i = 0;
	var veggieArray = document.getElementsByClassName("veggie");
		for (var j = 0;  j < veggieArray.length; j++) {
		
		if (veggieArray[j].checked && i == 0) {
			selectedVeggie.push(veggieArray[j].value);
			console.log("selected veggies: ("+veggieArray[j].value+")");
			text1 = text1+veggieArray[j].value+"<br>";
			text2 = text2+"$0"+"<br>";
			i++;
			j++;
}
		 if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
			console.log("selected veggies: ("+veggieArray[j].value+")");
			text1 = text1+veggieArray[j].value+"<br>";
			text2 = text2+"$1"+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggies: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("subtotal: $"+runningTotal+".00");
	console.log("veggie text1: "+text1);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"+text2;

};