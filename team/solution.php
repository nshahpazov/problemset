<?php 


function read() {    
  fscanf(STDIN, "%d", $n);
  $arr = array();

  for ($i = 0; $i < $n; $i++) {
    $numbers = explode(" ", fgets(STDIN));
    $arr[] = $numbers;
  }
     return $arr;
}

function isValid($numbers) {
  $result = array_sum($numbers);
  return $result >= 2;
}

$arr = read();
$filtered = array_filter($arr, "isValid");

echo count($filtered);
