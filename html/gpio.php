<?php
// The Layman's Pi
//This page is requested by the JavaScript, it creates the config file for raspberry pi
//Getting and using values


$handle_w = fopen("./config.pi","w");
$config = "config" . PHP_EOL;

foreach ($_GET as $key  => $value)
{
	if( isset( $value ) )
	{								
	    $var = strip_tags ($value);
	    $config .= $var . PHP_EOL;
	    
	}	
}

fwrite($handle_w, $config);
fclose($handle_w);

exec("./pi config.p i> /dev/null &");
 
//echo("success");
?>