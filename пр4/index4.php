<?php
	$default = "default";
	@mkdir($_POST['text'],0777);
	if (file_exists($_POST['text']) == true) {
		echo "Папка успешно создана!";
	} else {
		echo "Такая папка уже существует!";
	}
	if($_POST['text'] == 0){
		mkdir($default,0777);
	} else {
		echo "Такая папка уже существует!";
	}