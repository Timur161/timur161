<?php
	$arr = array(11,2,3,5,4,6,7,6,1,34,2,5,8,11);
	$newarr = array_unique($arr);
	foreach ($newarr as &$value) 
	{
		echo $value . ',';
	}
?>