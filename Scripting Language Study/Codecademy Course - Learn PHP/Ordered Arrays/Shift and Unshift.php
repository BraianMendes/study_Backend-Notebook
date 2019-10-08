<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:
array_unshift($record_holders, "Carl Lewis");
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Leroy Burrell");
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Donovan Bailey");
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Maurice Greene");
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Tim Montgomery");
echo "\n";
echo implode(", ", $record_holders);

array_shift($record_holders);
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Asafa Powell");
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Justin Gatlin");
echo "\n";
echo implode(", ", $record_holders);

array_shift($record_holders);
echo "\n";
echo implode(", ", $record_holders);

array_unshift($record_holders, "Usain Bolt");
echo "\n";
echo implode(", ", $record_holders);