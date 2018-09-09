const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const base = (isDev) ? 'http://localhost.com:3000' : ''; // insert prod api base here
