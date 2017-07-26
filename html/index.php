<!DOCTYPE html>
<!--THE LAYMAN'S PI -->

<html>
    <head>
        <meta http-equiv='content-type' content='text/html;charset=utf-8'>
        <title>Raspberry Pi Gpio</title>
	<style>
	  *{margin:0;padding:0;font-size:25px;color:teal;
	  text-decoration:none;}
	  
	  .input{ line-height:100px
	  margin-align:center;
	  padding:20px;
	  }

	  div{
	  width:700px;
	  height:1400px;
	  background:black;
	  margin:auto
	  
	  }


	  p{
	  font-size:33px;
	  text-align:center;
	  }

	  .title{
	  padding:40px;
	  font-size:40px;
	  text-align:center;
	  display:block;
	  }
	  
	  </style>
    </head>
 
    <body style="background-color: white;">
      <span class='title'> Welcome to the Layman's Pi Configuration Page!</span>
      <div>
	<form class='input' name="myForm" tag="forms">
	  <p> Choose Your Input IO Module</p>
	  <br>
	  <input type="radio" name="i_iomodule" value="PIR Motion Sensor" checked> PIR Motion Sensor<br>
	  <input type="radio" name="i_iomodule" value="Analog Temperature Sensor" >Analog Temperature Sensor<br>
	  <input type="radio" name="i_iomodule" value="Clock" >Clock<br>
	  <br>
	  <p> Select your Input Data Port(s)</p>
	  <input type="number" name="i_dataport" min="1" max="40" id="port">
	  <br>
	  <br>
	  <br>
	  <p> Choose  Your Output IO Module </p>
	  <br>
	  <input type="radio" name="o_iomodule" value="Relay Switch" checked> Relay Switch<br>
	  <input type="radio" name="o_iomodule" value="Servo Motor" >Servo Motor<br>
	  <input type="radio" name="o_iomodule" value="LED Matrix" >LED Matrix
	  <br><br>
	  <p> Select your Output Data Port(s)</p>
	  <input type="number" name="o_dataport" min="1" max="40" id="port">
	  	  
	  <br>
	  <br>
	  <p> Select Input's Action </p>
	  <input type="radio" name="i_action" value="Threshold" checked> Threshold
	  <input type="radio" name="i_action" value="Timer" >Timer   
	  <br>
	  <p> Action Value</p>
	  <input type="number" name="i_actionval" min="1" max="100" id="actionval">
	  <br><br>
	  
	  <input type="submit" value"submit" onclick="return send_config();">
	  <br>
	</form>  
      </div>
      <script src="script.js"></script>
    </body>
</html>
