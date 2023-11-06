import * as Sentry from '@sentry/browser';

if (process.env.SENTRY_KEY) {
  Sentry.init({
    dsn: process.env.SENTRY_KEY,
  });
}
