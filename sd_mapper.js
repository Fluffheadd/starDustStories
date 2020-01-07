/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author:
   Date:

*/



// determine the current date and time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById('timeStamp').innerHTML = timeStr;

// determine the sky map to use for the current date and time
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (thisMonth * 2 + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// insert HTML code for inline image of the sky map
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);
