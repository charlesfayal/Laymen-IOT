/*
*
*  The Layman's Pi Web Javascript
*/

function send_config ( ) {
    var data = 0;
  
    //this is the http request
    var request = new XMLHttpRequest();
   // var input = document.forms["myForm"]["i_dataport"];
    //var output = document.forms["myForm"]["o_dataport"];
    
    var strData = "gpio.php?pic= ";
    
    for (var i = 0; i< document.myForm.elements.length;i++)
    {
	/* Looping through all the Input Forms to send data through http request*/
	if(myForm.elements[i].type == "radio")
	{
	    if(myForm.elements[i].checked)
	    {
		strData += "+&r"+i+"=" + myForm.elements[i].value;
		//alert(myForm.elements[i].value);
	    }
	}
	else
	{
	    strData += "+&d"+i+"=" + myForm.elements[i].value;
	    //alert(myForm.elements[i].value);
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
	    if(!data.localeCompare("success"))
	    {
		alert("Succesfully Sent the Configuration to the Pi!");
	    }
	    else
	    {
		alert("Error: Config not Sent");
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
