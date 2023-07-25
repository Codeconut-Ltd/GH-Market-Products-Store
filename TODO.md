# Todo

TOC

- [Core functionality](#core-functionality)
- [Components](#components)

---

## Core functionality

### Architecture

/ Just add to Todo ...

- Fix: State info or dashboard no module open bug?
- WIP: Refactor 'Orders' in 'Dashboard' as new admin panel feature (frontend, backend)
- Optimize: Use `prop-types` or `Yup` for type checking (e.g. API structure)
- Optimize: Remove 'price' attribute to use 'priceTier' only (change data structure and code)
- Optimize: Recoil - Simplify use of queries vs. states (nesting unneeded)
- Optimize: Recoil - 2 fetches for `getTotalPrice` are unneeded
- Concept: Recoil - Create factory pattern for queries
- Concept: Recoil - Improve state reset/update workaround

### Build

- Exclude build, but find a way to store working versions, without having to rely on NPM

### Data

- WIP: Products - Implement latest JSON and image data
- Feature: Products - Add ability to hide images for full category in JSON
- Save: Check why POST also fires OPTION request (Axios?)
  - [dev.to](https://dev.to/opshack/why-is-my-browser-sending-an-options-http-request-instead-of-post-5621)

### PHP

- Fix: PHP API calls in wrong environment return path, not JSON data from method - `php://input` issue?
- Feature: Add export as CSV feature (+ formula injection safety measure)
- Feature: Show total income price (per day)
- Feature: Add `.htpasswd` to full folder (API still working)
- Feature: Add `.htpasswd` to API request URLs (Axios, .env URL?)
- Optimize: Use proper data structures/types for API (not associative arrays)
- Optimize: Refactor database to use `extends` vs Dependency injection for consistency
- Concept: Use `symfony/dotenv` for .env files in PHP (if any)
  - Split `composer.json` into internal and project part for `public/api` folder

### Tests

- WIP: Finish setup - Jest and TypeScript capability
- WIP: Implement/Remove demo test (at least one should be working)

## Components

### (Any)

- Optimize: Text wrapping in tiles (e.g. CSS hyphen or '...'?)
- Concept: Design to highlight most sold items in UI (e.g. as tiles)
- Concept: Show dev host banner / visual distinction (e.g. localhost vs. live)
- Concept: Show app build date / version (dynamic? source?)

#### Dashboard

- Feature: Add user name/id input (save in DB), update SQL
- Feature: Use `dompurify` for user input
- Feature: Show today/last day, this/last week, total sums prices
- Feature: Show visual chart/diagram of order data (any, as needed)
- Feature: Show all orders from DB (individual item rows)
- Feature: Add UI and mechanics to delete orders from DB
- Feature: Sort by date, latest item on top (or custom sort ID?)
- Feature: Add input field for user name (save per order row in DB)
- Optimize: Term 'total price' is used twice for different things (see 'getTotalPrice')
- Concept: Add SQL constraint between date and order ID (must be same)
- Concept: Decide how to handle free price feature (UI toggle in modal)

#### Header

- Optimize: Header order (mobile): Left, right - Not below each other (waste of space)
- Optimize: Add navigation active state to show current menu item
- Feature: Re-Design accordion UI to buttons

#### Experiments

- Optimize: Different colors per tile/ category, CSS? nth-*
- Optimize: Add animations/transitions to states (e.g. on saving and success)
  - Show status or visual component element, e.g. toast as confirm
