<?php

declare(strict_types=1);

if (! defined('ROOT')) {
    die;
}

/**
 * Encoding
 */
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');
mb_language('uni');
mb_regex_encoding('UTF-8');

/**
 * Error handling
 */
if (ENV === 'DEV') {
    @ini_set('display_errors', '1');
    @ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
} else {
    @ini_set('display_errors', '0');
    @ini_set('display_startup_errors', '0');
    error_reporting(0);
}
