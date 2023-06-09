<?php

declare(strict_types=1);

use App\Database;
use App\DatabaseQueries;
use App\RequestRoutes;

$dbLib         = new Database(DB_CONFIG);
$dbQueries     = new DatabaseQueries($dbLib);
$requestRoutes = new RequestRoutes($dbQueries);

$requestRoutes->route();
