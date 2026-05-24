# API Testing using PactumJS, Mocha, and JavaScript

This project contains API automation tests for the Swagger Petstore API using PactumJS with Mocha.

## Framework highlights

- Shared test bootstrap in `tests/api/support/setup.js`
- Environment-driven base URL
- API key support via environment variables (`API_KEY`, `API_KEY_HEADER`)
- Mochawesome HTML reporting
- ESLint quality checks
- GitHub Actions CI for pull requests and pushes

## Project structure

- `tests/api/specs/pet/` - Petstore API test specs
- `tests/api/fixtures/pet/` - request payloads and reusable JSON data
- `tests/api/services/petService.js` - Petstore request builders
- `tests/api/constants/` - shared status codes
- `tests/api/support/` - shared test bootstrap
- `.github/workflows/` - CI pipelines

## Prerequisites

- Node.js 20 or newer
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local environment file:

   ```bash
   cp .env.example .env
   ```

3. Optional: use the provided Petstore env file directly:

   `config/env/.env.petstore`

## Run commands

- Run Petstore suite:

  ```bash
  npm test
  ```

- Run Petstore suite with explicit API key requirement:

  ```bash
  npm run test:petstore:auth
  ```

- Run lint:

  ```bash
  npm run lint
  ```

- Run CI-equivalent local check:

  ```bash
  npm run test:ci
  ```

## Reports

After test execution, open:

- `mochawesome-report/mochawesome.html`

## Notes

- Do not commit `.env` files.
- Use `.env.example` as the source of required environment variables.

## Sample Test Results

![API Testing Console Report](./assets/test-results-console.PNG?raw=true "API Testing Console Report")

![API Testing HTML Report](./assets/test-results.png?raw=true "API Testing HTML Report")
