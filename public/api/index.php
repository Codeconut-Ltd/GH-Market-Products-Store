<?php

declare(strict_types=1);

define('ROOT', __DIR__);

// Config / ENV
require_once ROOT . '../../../_config/gh-market-products-store.php';

// Config
require_once ROOT . '/config/settings.php';

// App
require_once ROOT . '/app/database/lib.php';
require_once ROOT . '/app/database/queries.php';
require_once ROOT . '/app/request/lib.php';
require_once ROOT . '/app/request/routes.php';

// Run
require_once ROOT . '/run.php';
