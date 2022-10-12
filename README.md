[![PR](https://github.com/messagebird-dev/e2e-api-tests/actions/workflows/pr.yml/badge.svg)](https://github.com/messagebird-dev/e2e-api-tests/actions/workflows/pr.yml)

# E2E API Tests

## Installation

1. Copy the `.env.example` and rename to `.env`
2. Grab your `$NEST_API$_token` and set the `BEARER_TOKEN` value.
3. Run `npm install`

### Execute all tests

```
npm run tests
```

### Execute specific test

```
npm run test <path-to-test-file>
```

i.e:

```
npm run tests tests/accounts/accounts.js
```
