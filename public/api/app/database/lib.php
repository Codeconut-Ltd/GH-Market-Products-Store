<?php

declare(strict_types=1);

namespace App;

use PDO;

use function is_array;

/**
 * PDO database connection.
 */
// phpcs:ignore
final class Database
{
    /**
     * Database connection config.
     *
     * @todo Optimize - Use custom data type instead array
     * @var array
     */
    private $config = [
        'host'     => '',
        'name'     => '',
        'user'     => '',
        'password' => '',
    ];

    /**
     * Connection reference.
     *
     * @var null|object
     */
    private $connection;

    /**
     * Constructor sets dependencies.
     */
    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * Close (opened) database connection.
     */
    public function close()
    {
        $this->connection = null;
    }

    /**
     * Return existing or open and return new database connection.
     */
    public function open() : object
    {
        return $this->connection
            ? $this->connection
            : $this->getNewConnection();
    }

    /**
     * Get all or empty result.
     *
     * @param mixed $statement PDO statement object
     */
    public function fetchAllOrEmptyResult($statement) : array
    {
        $result = $statement->fetchAll();

        if (! $result || ! is_array($result)) {
            $result = [];
        }

        return $result;
    }

    /**
     * Create and return new connection.
     */
    private function getNewConnection() : object
    {
        $config = $this->config;

        $hostDatabase = "mysql:host={$config['host']};dbname={$config['name']}";
        $encoding     = [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8mb4'];

        $connection = new PDO($hostDatabase, $config['user'], $config['password'], $encoding);

        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        return $connection;
    }
}
