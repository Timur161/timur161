<?php
$arr = ['1','2','3','4','5','6'];

array_pop($arr) xor array_push($arr, 'more');

echo "Изменённый массив: ";

foreach ($arr as &$value) {
    echo $value . ",";
}
?>
