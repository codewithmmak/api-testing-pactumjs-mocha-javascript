const path = require('path');
const dotenv = require('dotenv');
const { request, settings } = require('pactum');

// Load environment-specific .env file when ENV is set (e.g. dev, qa, staging, prod),
// otherwise fall back to the root .env file.
const env = process.env.ENV;
const envFile = env
  ? path.resolve(process.cwd(), `config/env/.env.${env}`)
  : path.resolve(process.cwd(), '.env');

dotenv.config({ path: envFile });

const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;
const apiKey = process.env.API_KEY;
const apiKeyHeader = process.env.API_KEY_HEADER || 'x-api-key';
const requireApiKey = String(process.env.REQUIRE_API_KEY).toLowerCase() === 'true';
const timeout = parseInt(process.env.REQUEST_TIMEOUT || '10000', 10);

if (!baseUrl) {
  throw new Error(`PACTUM_REQUEST_BASE_URL is required. Add it to ${envFile} or as an environment variable.`);
}

if (requireApiKey && !apiKey) {
  throw new Error('API_KEY is required when REQUIRE_API_KEY=true.');
}

request.setBaseUrl(baseUrl);
request.setDefaultTimeout(timeout);
settings.setLogLevel('ERROR');

if (apiKey) {
  request.setDefaultHeaders({
    [apiKeyHeader]: apiKey,
  });
}

module.exports = {};
