// Initiating variables
var mpg = localStorage.getItem("mpg");
var address = localStorage.getItem("address");
var distance = localStorage.getItem("distance");
var insurance = localStorage.getItem("insurance");
var bike = localStorage.getItem("bike");
var publictrans = localStorage.getItem("public-trans");
var vehicle = localStorage.getItem("vehicle");
var exercise = localStorage.getItem("exercise");
var carpool = localStorage.getItem("carpool");
var carpoolNum = localStorage.getItem("carpoolNum");
var transportation = localStorage.getItem("transportation");
//Permit Prices
var motorcyclePermit = 44;
var carPermit = 178;
var carpoolPermit = 178 / carpoolNum;
//Gas Price
var priceGas = 3.59;


//Calculations

//Gas Price
var priceMPG = priceGas/mpg;
var days = 4.3 * 4 * 5;
var totalGas = priceMPG * (distance * days);

//Carpool Gas Price
var carpoolGas = totalGas/carpoolNum;

//co2 emission per mile = (8887grams/mpg) x distance
var co2 = (8887/mpg) * distance;
var carpoolco2 = co2;
var busco2 = (8887/7.1) * distance;
var sinsurance = (4 * insurance);
var vehicleCost = 0;



//Total Car Sustainability
if (vehicle == "no") {
    document.getElementById("carco2").innerHTML= "N/A";
}
else if (mpg == 0) {
    document.getElementById("carco2").innerHTML= 0.00 + " grams";
}
else if (mpg > 0) {
    document.getElementById("carco2").innerHTML= co2.toFixed(2) + " grams";
}



//Total Vehicle Spending Cost
if (vehicle == "yes" && transportation == "car") {
    document.getElementById("sinsurance").innerHTML="$"+sinsurance.toFixed(2);
    document.getElementById("vehiclepermit").innerHTML="$"+carPermit.toFixed(2);
    document.getElementById("vehiclegas").innerHTML="$"+totalGas.toFixed(2);
    
    vehicleCost = sinsurance + carPermit + totalGas; 
    document.getElementById("vehicleCost").innerHTML="$"+vehicleCost.toFixed(2);
}
else if (vehicle == "yes" && transportation == "motorcycle") {
    document.getElementById("sinsurance").innerHTML="$"+sinsurance.toFixed(2);
    document.getElementById("vehiclepermit").innerHTML="$"+motorcyclePermit.toFixed(2);
    document.getElementById("vehiclegas").innerHTML="$"+totalGas.toFixed(2);

    vehicleCost = sinsurance + carPermit + totalGas; 
    document.getElementById("vehicleCost").innerHTML="$"+vehicleCost.toFixed(2);
}
else if (vehicle == "yes" && transportation == "carpool") {
    document.getElementById("sinsurance").innerHTML="$"+sinsurance.toFixed(2);
    document.getElementById("vehiclepermit").innerHTML="$"+carPermit.toFixed(2);
    document.getElementById("vehiclegas").innerHTML="$"+totalGas.toFixed(2);

    vehicleCost = sinsurance + carPermit + totalGas; 
    document.getElementById("vehicleCost").innerHTML="$"+vehicleCost.toFixed(2);
}
else if (vehicle == "yes") {
    document.getElementById("sinsurance").innerHTML="$"+sinsurance.toFixed(2);
    document.getElementById("vehiclepermit").innerHTML="$"+carPermit.toFixed(2);
    document.getElementById("vehiclegas").innerHTML="$"+totalGas.toFixed(2);
    
    vehicleCost = sinsurance + carPermit + totalGas; 
    document.getElementById("vehicleCost").innerHTML="$"+vehicleCost.toFixed(2);
}
else {
    document.getElementById("sinsurance").innerHTML="N/A";
    document.getElementById("vehiclepermit").innerHTML="N/A";
    document.getElementById("vehiclegas").innerHTML="N/A";
    document.getElementById("vehicleCost").innerHTML="N/A";
}



//Carpool Sustainability
if (vehicle == "yes" && carpool == "yes") {
    document.getElementById("carpoolco2").innerHTML=carpoolco2 + " grams";
}
else if (carpool == "no") {
    document.getElementById("carpoolco2").innerHTML="N/A";
}
else if (vehicle == "no" && carpool == "yes") {
    document.getElementById("carpoolco2").innerHTML="N/A";
}



//Carpool Spending Cost
if (vehicle == "yes" && carpool == "yes") {
    document.getElementById("carpoolinsurance").innerHTML="$"+sinsurance.toFixed(2);
    document.getElementById("carpoolpermit").innerHTML="$"+carpoolPermit.toFixed(2);
    document.getElementById("carpoolgas").innerHTML="$"+carpoolGas.toFixed(2);

    vehicleCost = sinsurance + carpoolPermit + carpoolGas;
    document.getElementById("carpoolCost").innerHTML="$"+vehicleCost.toFixed(2);
}
else if (carpool == "no") {
    document.getElementById("carpoolinsurance").innerHTML="N/A";
    document.getElementById("carpoolpermit").innerHTML="N/A";
    document.getElementById("carpoolgas").innerHTML="N/A";
    document.getElementById("carpoolCost").innerHTML="N/A";
}
else if (vehicle == "no" && carpool == "yes") {
    document.getElementById("carpoolinsurance").innerHTML="N/A";
    document.getElementById("carpoolpermit").innerHTML="N/A";
    document.getElementById("carpoolgas").innerHTML="N/A";
    document.getElementById("carpoolCost").innerHTML="N/A";
}



//Prints out Bus Sustainability
document.getElementById("busco2").innerHTML=busco2.toFixed(2) + " grams";



//Prints user chosen transportation option
document.getElementById("result-transportation").innerHTML=localStorage.getItem("transportation");



//Prints Total Bike Costs
if (bike == "yes") {
    document.getElementById("bikePrice").innerHTML="$0.00";
}
else if (bike == "no") {
    document.getElementById("bikePrice").innerHTML="$200-$300 (one time purchase)";
}



// variables distance, bike, publictrans, vehicle, exercise, carpool
/*******************************************************************
 *     2     MILES     SECTION
 *******************************************************************
*/

if (distance < 2 && publictrans == "yes" && exercise == "yes" && bike == "yes") {
  //Bike, Shuttle, or Car
  document.getElementById("optimal-trans").innerHTML="bike or hornet express";
}
else if (distance < 2 && publictrans == "yes" && exercise == "no" && bike == "yes") {
  //Shuttle or Car
  document.getElementById("optimal-trans").innerHTML="hornet express";
}
else if (distance < 2 && publictrans == "yes" && exercise == "yes" && bike == "no") {
  //Walk or Shuttle
  document.getElementById("optimal-trans").innerHTML="walk or hornet express";
}
else if (distance < 2 && publictrans == "no" && exercise == "yes" && bike == "yes") {
  //Bike
  document.getElementById("optimal-trans").innerHTML="bike";
}
else if (distance < 2 && publictrans == "no" && exercise == "no" && bike =="yes") {
  //Car
  document.getElementById("optimal-trans").innerHTML="taking your own car";
}
else if (distance < 2 && publictrans == "yes" && exercise == "no" && bike =="no") {
  //Shuttle
  document.getElementById("optimal-trans").innerHTML="hornet express";
}
else if (distance < 2 && publictrans == "no" && exercise == "yes" && bike =="no") {
  //Walk or Bike
  document.getElementById("optimal-trans").innerHTML="walk or jump bike";
}
else if (distance < 2 && publictrans == "no" && exercise == "no" && bike =="no") {
  //Car
  document.getElementById("optimal-trans").innerHTML="taking your own car";
}





/*******************************************************************
 *     2-5     MILES     SECTION
 *******************************************************************
*/

else if (distance >= 2 && distance < 5 && publictrans == "yes") {
  // Bus or Light Rail
  document.getElementById("optimal-trans").innerHTML="bus";
}
else if (distance >= 2 && distance < 5 && publictrans == "no" && exercise == "no" && car == "yes") {
  //Car
  document.getElementById("optimal-trans").innerHTML="taking your own car";
}
else if (distance >= 2 && distance < 5 && publictrans == "no" && bike == "yes") {
  //Bike
  document.getElementById("optimal-trans").innerHTML="human-powered vehicles (bikes, scooters, etc.)";
}
else if (distance >= 2 && distance < 5 &&publictrans == "no" && bike == "no" && vehicle =="yes") {
  //Walk or Bike
  document.getElementById("optimal-trans").innerHTML="walk, jump bike or car";
}
else if (distance >= 2 && distance < 5 &&publictrans == "no" && bike == "no" && vehicle =="no") {
  //Walk or Bike
  document.getElementById("optimal-trans").innerHTML="walk or jump bike";
}





/*******************************************************************
 *     5-10     MILES     SECTION
 *******************************************************************
*/

else if (distance >= 5 && distance < 10 && publictrans == "yes" && carpool == "yes" && vehicle == "yes") {
  // Bus/Light Rail or Carpool or Vehicle
  document.getElementById("optimal-trans").innerHTML="hornet express, light rail or carpool";
}
else if (distance >= 5 && distance < 10 && publictrans == "yes" && carpool == "no" && vehicle == "yes") {
  //Public Transportation or Car
  document.getElementById("optimal-trans").innerHTML="hornet express or light rail";
}
else if (distance >= 5 && distance < 10 && publictrans == "yes" && carpool == "yes" && vehicle == "no") {
  //Public Transportation or Carpool
  document.getElementById("optimal-trans").innerHTML="hornet express or light rail";
}
else if (distance >= 5 && distance < 10 && publictrans == "no" && vehicle == "yes" && carpool == "yes") {
  //Carpool or Car
  document.getElementById("optimal-trans").innerHTML="carpool";
}
else if (distance >= 5 && distance < 10 && publictrans == "yes" && vehicle == "no" && carpool =="yes") {
  // Light Rail or Hornet Express
  document.getElementById("optimal-trans").innerHTML="light rail or hornet express";
}
else if (distance >= 5 && distance < 10 && publictrans == "no" && vehicle == "yes" && carpool =="no") {
  //Car
  document.getElementById("optimal-trans").innerHTML="taking your own car";
}




/*******************************************************************
 *     10+     MILES     SECTION
 *******************************************************************
*/

else if (distance >= 10 && publictrans == "yes" && carpool == "yes" && vehicle == "yes") {
  //Bus/Light Rail or Carpool or Vehicle
  document.getElementById("optimal-trans").innerHTML="light rail or carpool";
}
else if (distance >= 10 && publictrans == "yes" && carpool == "no" && vehicle == "yes") {
  //Public Transportation or Car
  document.getElementById("optimal-trans").innerHTML="light rail or take your own vehicle";
}
else if (distance >= 10 && publictrans == "yes" && carpool == "yes" && vehicle == "no") {
  //Carpool or Light Rail
  document.getElementById("optimal-trans").innerHTML="light rail or bus";
}
else if (distance >= 10 && publictrans == "no" && vehicle == "yes" && carpool == "yes") {
  //Car or Carpool
  document.getElementById("optimal-trans").innerHTML="carpool";
}
else if (distance >= 10 && publictrans == "no" && vehicle == "no" && carpool =="yes") {
  //Light Rail
  document.getElementById("optimal-trans").innerHTML="some sort of public transportation";
}
else if (distance >= 10 && publictrans == "no" && vehicle == "yes" && carpool =="no") {
  //Car
  document.getElementById("optimal-trans").innerHTML="taking your own vehicle";
}



/*******************************************************************
 *     Google Maps API
 *******************************************************************
*/
