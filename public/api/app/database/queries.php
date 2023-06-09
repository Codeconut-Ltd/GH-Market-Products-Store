<?php

declare(strict_types=1);

namespace App;

use Exception;
use PDO;

use function count;
use function is_array;
use function var_dump;

/**
 * Database queries.
 */
// phpcs:ignore
final class DatabaseQueries
{
    /**
     * Database instance.
     *
     * @var null|object
     */
    private $db;

    /**
     * Constructor sets dependencies.
     */
    public function __construct(Database $db)
    {
        $this->db = $db;
    }

    /**
     * Destructor closes open connections.
     */
    public function __destruct()
    {
        $this->db->close();
    }

    /**
     * Start database connection.
     */
    public function start() : self
    {
        $this->connection = $this->db->open();

        return $this;
    }

    /**
     * Take data from POST, add dynamic columns and save it to database.
     *
     * @todo Optimize - Use appropriate data schema instead array for 'orderList'.
     * @param array $orderList [categoryName, productName, price]
     */
    public function saveOrder(array $orderList) : self
    {
        if (! count($orderList)) {
            throw new Exception('Order data must not be empty');
        }

        $newOrderId = $this->getOrderId();
        $statement  = $this->connection
            ->prepare('INSERT INTO `order_list` (`order_id`, `category_name`, `product_name`, `price`)
            VALUES (:orderId, :categoryName, :productName, :price)');

        foreach ($orderList as $item) {
            $item['orderId'] = $newOrderId;

            $statement->execute($item);
        }

        return $this;
    }

    /**
     * Get all orders.
     */
    public function getOrders() : array
    {
        $sql = "SELECT * FROM `order_list` ORDER BY id DESC";

        $statement = $this->connection->query($sql, PDO::FETCH_ASSOC);

        return $this->db->fetchAllOrEmptyResult($statement);
    }

    /**
     * Get last saved order data or return empty array.
     *
     * @info Warning - Latest order fetching might break if app is used in multiple places parallel.
     * @todo Optimize - Hand over last saved ID instead of 'guessing' it.
     */
    /*
    public function getLastOrder() : array
    {
        $sqlOrderId = "(SELECT MAX(`order_id`) as `orderID` FROM `order_list`)";
        $sql        = "SELECT * FROM `order_list` WHERE `order_id` = " . $sqlOrderId;

        $statement = $this->connection->query($sql, PDO::FETCH_ASSOC);

        return $this->db->fetchAllOrEmptyResult($statement);
    }
    */

    /**
     * Get total price for everything.
     *
     * @todo WIP - Implement feature
     */
    public function getTotalPrice() : int
    {
        $sql = "SELECT SUM(price) FROM `order_list`";

        $statement = $this->connection->query($sql, PDO::FETCH_NUM);
        $priceData = $statement->fetch();

        if (! $priceData || ! is_array($priceData)) {
            throw new Exception('No price data found');
        }

        return (int) $priceData[0];
    }

    /**
     * Get highest existing order ID, increment by 1 and return.
     */
    private function getOrderId() : int
    {
        $sql       = "SELECT MAX(`order_id`) as `orderID` FROM `order_list`";
        $statement = $this->connection->query($sql, PDO::FETCH_ASSOC);

        $result = $statement->fetch();
        $result = (int) $result['orderID'];

        return $result += 1;
    }
}
