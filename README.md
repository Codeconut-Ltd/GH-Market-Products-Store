![Market Products Store](teaser.png)

# Product register

TOC

- [About](#about)
- [Use](#use)
- [Documentation](#documentation)
- [Testing](#testing)
- [Issues](#issues)

<br>

---

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Codeconut-Ltd_GH-Market-Products-Store&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Codeconut-Ltd_GH-Market-Products-Store)

<br><br>

## About

Proof of concept mobile web-app for market product sales tracking.

Registers actual products being sold, as well as the time (stored in the DB). This information is crucial for sellers to figure out the best times at a market vs. those times that could be spent better doing something else.

> This is the tech and skill demo version withour real application data like products.
> Early, conceptual MVP phase with some features to be refined and finished on demand.

---

## Use

### Install

#### Dependencies

Install Node and Composer on local system.

- [Composer](https://getcomposer.org)
- [Node.js](https://nodejs.org/en)

Then run in CLI:

```bash
composer install
npm install
```

### PHP + Database

- Install a PHP server and database that can run the API's PHP code
  - Copy credentials template from `_internals`
  - Adjust path to credentials under `public/api/index`
  - Initialize the database with SQL from `_internals/sql/*.sql`
- Run the build and upload the `build` folder
  - Build contains the API that needs PHP and SQL to run

### Environment

- Create file `.env` with content from `env.example` (adjust as needed)
- See info about `htpasswd` settings to adjust depending on hosting environment.

> Be aware that running DEV server _vs_ running build scripts use different environments. Build is for production only.

### Run

#### Development

```bash
# Start DEV server (with hot reload)
# - Uses development path config
npm run start
```

#### Production

```bash
# Build production bundle for deployment
# - Uses '.env.production' file and different paths
npm run build

# Start LIVE server preview (static files)
# - Intended to be used with production build only
npm run run
```

### Updates

#### Packages

See: `composer.json`, `package.json`

For security reasons: Package versions have been made static without upgrade possibility.
If you need to update within the current major version, add the `^` symbol in front of version numbers.

---

## Documentation

### Access

- `.htaccess`: Update path under `AuthUserFile`
- `.htpasswd`: See secret values in `.env.example`

### Config

Any system and app configuration.

- Backend
  - URLs: `/public/api/config/*.php`
  - Routes: `.../api/app/request/routes.php`
- Frontend
  - Environment: `.env*`
  - URLs: `/src/config/*.ts`

> Path eventually without `/public/`

### Data / Products

- JSON: `/public/api/data/products.json`

To use image placeholder, remove the `img` attribute from a product in `productList`.
Any given path will try to load the image, even if thaht is a 404.

### Modules

Application dependencies for feature development and production.

#### Backend

| Module / Stack                                        | Use case      |
| ----------------------------------------------------- | ------------- |
| [DotEnv - Symfony](https://github.com/symfony/dotenv) | DotEnv in PHP |
| [Kint](https://github.com/kint-php/kint)              | PHP debugger  |
| [PDO](https://www.php.net/manual/en/book.pdo.php)     | PDO database  |

#### Frontend

| Module / Stack                                                              | Use case                       |
| --------------------------------------------------------------------------- | ------------------------------ |
| [Axios](https://axios-http.com/docs/intro)                                  | HTTP Requests (GET, POST, ...) |
| [Bootstrap](https://getbootstrap.com/docs/5.0)                              | Component and CSS framework    |
| [i18next](https://www.i18next.com)                                          | Languages, Localisation        |
| [React](https://reactjs.org)                                                | Web application framework      |
| [React Icons](https://react-icons.github.io/react-icons)                    | Icons (e.g. FontAwesome)       |
| [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) | Routing                        |
| [Recoil](https://recoiljs.org)                                              | State management ('Pub sub')   |
| [Styled Components](https://styled-components.com)                          | CSS in JS                      |
| [TypeScript](https://www.typescriptlang.org)                                | TypeScript                     |

#### WIP

Not in use (yet) - Frontend or backend.

| Module / Stack                                          | Use case                               |
| ------------------------------------------------------- | -------------------------------------- |
| [DomPurify](https://github.com/cure53/DOMPurify)        | Sanitizing, Input security             |
| [Jest](https://jestjs.io)                               | Unit and E2E tests                     |
| [PhpUnit](https://phpunit.de)                           | Unit tests                             |
| [Prop Types](https://www.npmjs.com/package/prop-types)  | Runtime, dynamic type checks           |
| [React Styleguidist](https://react-styleguidist.js.org) | Component documentation and styleguide |

### Solutions

Specific settings that diverge from expected default setups.

| Resource                                                                                                   | Use case            |
| ---------------------------------------------------------------------------------------------------------- | ------------------- |
| [Create React App - Deployment](https://create-react-app.dev/docs/deployment/#building-for-relative-paths) | Subfolder URL setup |

### Training

Generally important to know.

| Resource                                                       | Topics                 |
| -------------------------------------------------------------- | ---------------------- |
| [Javascript](https://javascript.info)                          | Modern JavaScript      |
| [React - Course](https://github.com/Asabeneh/30-Days-Of-React) | 30 Days of React       |
| [React - Hooks](https://reactjs.org/docs/hooks-intro.html)     | React API - Hooks      |
| [React - Guides](https://reactresources.com)                   | Tutorials and Snippets |

Important React concepts:

- Props, State, Component lifecycle
- Hooks: useEffect, useState

---

## Testing

Checklist for QA purposes.

| Section         | Component                 | Test                                                |
| --------------- | ------------------------- | --------------------------------------------------- |
| Layout / Header | Reset (button)            | Must not be clickable without selection             |
| Layout / Header | Reset (button)            | Click must delete product selection and price views |
| Layout / Header | Finish (button)           | Must not be clickable without selection             |
| Layout / Header | Finish (button)           | Click must open modal view                          |
| Dashboard       | Orders total price (text) | Price updates on subsequent Ajax calls              |
| Modal Overview  | Save (button)             | Click must send Ajax POST request                   |
| Products        | Product item (accordion)  | Toggle must open item; show text and images         |

---

## Issues

### Development ENV

#### PHP API

If the application shows a broken interface, it's likely a failed PHP call to the API returning weird data; e.g. `/api/?method=price` returns path instead data. In this case the server/ PHP version is not compatible to the application.

#### Build folder

This will lead to merge conflicts over time. It's solely included to simplify a minimalist one-way workflow,
and to keep a safe running artifact independent from any NPM hickups, when re-installing the app after a while.

#### Recoil

##### 'Duplicate atom key ...'

- Where: Browser console, message
- When: Sometimes on code change and DEV env rebuild
- Solution: Reload website manually
