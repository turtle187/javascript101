var houseType = "Victorian";
var houseColor = "Yellow";
var address= "1234 Vally Street";
var bedrooms = 4;
var bathrooms = 2;
var sqft = 4000;
var garage = true;
var commissionPercent = .06;
var price = 375000;
var commission = commissionPercent * price;


console.log("The lovely",  houseColor, houseType,  "Located at" , address ,"costs" , price);
console.log("The tolal commission is" , commission.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));