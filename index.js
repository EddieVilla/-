// TODO currently off by about 28-30 days
// DONE month off by one (start from 0 as january)

var xVal = ((new Date(Date.now()))-(new Date(1995,3,7,6,11)));
var xElement = null;
var ms = 9; //interval between UI updates

xElement = document.getElementById("test");

//run `startWatch` every `ms` milliseconds
var Interval = window.setInterval(startWatch, ms);


function startWatch(){

    xVal += ms;

    //update UI
    xElement.innerHTML = Math.round((xVal/1000/60/60/24/365)*100000000)/100000000; //convert to year format

}
