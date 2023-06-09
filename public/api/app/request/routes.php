<?php

declare(strict_types=1);

namespace App;

use Exception;

use function var_dump;

/**
 * API method handling from routes.
 */
// phpcs:ignore
final class RequestRoutes extends Request
{
    /**
     * Database queries instance.
     *
     * @var null|object
     */
    private $dbQueries;

    /**
     * Constructor initializes request and sets dependencies.
     */
    public function __construct(DatabaseQueries $dbQueries)
    {
        parent::__construct();

        $this->dbQueries = $dbQueries;
    }

    /**
     * Route API URLs to corresponding functions or throw error.
     *
     * @todo WIP - Implement or remove 'orders'
     * @throws Exception
     */
    public function route()
    {
        switch ($this->method) {
            // case "orders":
            //     throw new Exception("WIP: Feature not implemented yet");
            //     break;
            case "price":
                $this->handleTotalPrice();
                break;
            case "products":
                $this->handleProductPost();
                break;
            default:
                throw new Exception("Method '$this->method' does not correspond to API functionality.");
        }
    }

    /**
     * @todo WIP - Implement feature
     */
    private function handleTotalPrice()
    {
        $price = $this->dbQueries
            ->start()
            ->getTotalPrice();

        $this->showAsJson(['sum' => $price]);
    }

    /**
     * Save products to database.
     * Get from input, save and output status result.
     *
     * @todo Optimize - Implement checking for $_POST request and deny others.
     * @todo Concept - Decide on return values for errors.
     * @todo Concept - Check for additionally required security measures.
     * @throws Exception
     */
    private function handleProductPost()
    {
        $productData = $this->getInputAsJson();

        $this->dbQueries
            ->start()
            ->saveOrder($productData);

        $this->showAsJson(['success' => true]);
    }
}
