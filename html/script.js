﻿//TheFreeElectron 2015, http://www.instructables.com/member/TheFreeElectron/
//JavaScript, uses pictures as buttons, sends and receives values to/from the Rpi
//These are all the buttons
var button_0 = document.getElementById("button_0");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");
var button_6 = document.getElementById("button_6");
var button_7 = document.getElementById("button_7");

//Create an array for easy access later
var Buttons = [ button_0, button_1, button_2, button_3, button_4, button_5, button_6, button_7];

//This function is asking for gpio.php, receiving datas and updating the index.php pictures
function change_pin ( pic ) {
    var data = 0;
    //send the pic number to gpio.php for changes
    //this is the http request
    var request = new XMLHttpRequest();
   // var input = document.forms["myForm"]["i_dataport"];
    //var output = document.forms["myForm"]["o_dataport"];
    
    var strData = "gpio.php?pic= ";
    
    for (var i = 0; i< document.myForm.elements.length;i++)
    {
	if(myForm.elements[i].type == "radio")
	{
	    if(myForm.elements[i].checked)
	    {
		strData += "+&r"+i+"=" + myForm.elements[i].value;
		alert(myForm.elements[i].value);
	    }
	}
	else{
	    strData += "+&d"+i+"=" + myForm.elements[i].value;
	    alert(myForm.elements[i].value);
	}
	
	//strData .= "&r=" + element.value;
    }
    //alert(.value);
    request.open( "GET" , strData, true);
    request.send(null);
    //receiving informations
    request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200) {
	    data = request.responseText;
	    if(data.localeCompare("yes") == 0)
	    {
		alert("YESS!!");
	    }
	    else if(!data.localeCompare("error"))
	    {
	    //update the index pic
		alert("we got it, yay");
	    }
	    else
	    {
		alert("no, we don't got it");
	    }
	}
	//test if fail
	else if (request.readyState == 4 && request.status == 500) {
	    alert ("server error");
	    return ("fail");
	}
	//else 
	else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) { 
	    alert ("Something went wrong!");
	    return ("fail"); }
    }	
    
    return 0;
}
