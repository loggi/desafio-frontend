import * as Sentry from '@sentry/node';

if (process.env.SENTRY_KEY) {
  Sentry.init({
    dsn: process.env.SENTRY_KEY,
  });
}
