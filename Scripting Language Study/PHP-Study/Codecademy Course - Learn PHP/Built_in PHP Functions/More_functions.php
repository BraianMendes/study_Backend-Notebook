<?php
namespace Codecademy;

// Write your code below:
function convertToShout($string){
  return strtoupper($string)."!";
}

echo convertToShout("Fush Ro Da");
echo "\n";

function tipGenerously($num){
  return ceil($num*1.2);
}

echo tipGenerously(100);
echo "\n";

function calculateCircleArea($diameter){
  return ($diameter/2)**2*pi();
}

echo calculateCircleArea(20);