<?php
//TheFreeElectron 2015, http://www.instructables.com/member/TheFreeElectron/
//This page is requested by the JavaScript, it updates the pin's status and then print it
//Getting and using values
$handle_w = fopen("./pi2.txt","w");
$config = "config" . PHP_EOL;

foreach ($_GET as $key  => $value)
{
	if( isset( $value ) )
	{
		if($value == 3)
		{
			 echo("yes");
		}
									
	    $var = strip_tags ($value);
	    $config .= $var . PHP_EOL;
	    
	}	
}
fwrite($handle_w, $config);
fclose($handle_w);
?>