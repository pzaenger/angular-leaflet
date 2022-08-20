module.exports = {
  apps: [
    {
      name: 'angular-leaflet',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist/angular-leaflet',
        PM2_SERVE_PORT: +(process.env.PORT || 80)
      }
    }
  ]
};
