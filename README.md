# angular-leaflet

Example of how to use [Angular](https://angular.io/) 14 and [Leaflet](https://leafletjs.com/) 1.8.

The project implements the visualisation of capitals worldwide
using [`CircleMarker`](https://leafletjs.com/reference.html#circlemarker). In addition, it includes a Dockerfile
using [PM2](https://pm2.keymetrics.io/) to serve the bundled app.

And one note: the versions of Leaflet and its types do not match correctly.

## Screenshots

![Preview 1](https://raw.githubusercontent.com/pzaenger/angular-leaflet/master/preview-1.png)

![Preview 2](https://raw.githubusercontent.com/pzaenger/angular-leaflet/master/preview-2.png)

## Development

```
npm install
npm start
```

## Production

```
npm run build
docker build -t <name>:<tag> .
docker run <name>:<tag>
```
