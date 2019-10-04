<?php
// Write your code below:
function calculateTip($total, $tip = 20)
{
  return $total * (1 + $tip/100);
}

/*
// An Alternate Version:
function calculateTip($total, $tip = 20)
{
  return $total + ($total * $tip/100);
}
*/

echo calculateTip(100, 25);
echo "\n";
echo calculateTip(100); 
echo "\n";
echo calculateTip(65, 15); 