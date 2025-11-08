module.exports = {
  files: [
    '_site/**/*.html',
    '_site/**/*.css',
    '_site/**/*.js'
  ],
  server: {
    baseDir: '_site'
  },
  port: 4000,
  open: true,
  notify: false,
  ui: {
    port: 4001
  },
  ghostMode: {
    clicks: true,
    forms: true,
    scroll: true
  },
  logLevel: 'info',
  logPrefix: 'BrowserSync',
  logFileChanges: true,
  reloadDelay: 0,
  reloadDebounce: 500
};

