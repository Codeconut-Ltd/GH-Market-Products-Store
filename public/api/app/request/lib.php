<?php

declare(strict_types=1);

namespace App;

use Exception;

use function addslashes;
use function file_get_contents;
use function header;
use function htmlspecialchars;
use function is_array;
use function is_string;
use function json_decode;
use function json_encode;
use function trim;

use const ENT_QUOTES;

/**
 * HTTP request handling.
 */
// phpcs:ignore
abstract class Request
{
    /**
     * API method name to match to functionality.
     *
     * @var null|string
     */
    protected $method;

    public function __construct()
    {
        $this->method = $this->getRequestMethodName();
    }

    /**
     * Get input data from request as JSON.
     *
     * @todo Optimize - Check if security measures are needed
     */
    public function getInputAsJson() : array
    {
        $input = file_get_contents('php://input');
        $data  = json_decode($input, true);

        if (! $data || ! is_array($data)) {
            throw new Exception('Input is invalid JSON');
        }

        return $data;
    }

    /**
     * Output data as JSON.
     */
    public function showAsJson(array $data)
    {
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode($data);
    }

    /**
     * Get requested API method name.
     */
    private function getRequestMethodName() : string
    {
        $raw = $_REQUEST['method'] ?? '';

        if (! is_string($raw)) {
            return '';
        }

        $name = empty($raw) ? '' : $raw;
        $name = trim($raw);
        $name = htmlspecialchars($raw, ENT_QUOTES);
        $name = addslashes($raw);

        return $name;
    }
}
