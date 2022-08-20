# angular-leaflet

Simple example of how to use [Angular](https://angular.io/) 14 and [Leaflet](https://leafletjs.com/) 1.8. The project
includes also a Dockerfile using [PM2](https://pm2.keymetrics.io/) to serve the app. And as always, it's just a short
demo - a lot could be done better or differently (one small note: the versions of Leaflet and its types do not match).

![alt text](https://raw.githubusercontent.com/pzaenger/angular-leaflet/master/preview-1.png)

![alt text](https://raw.githubusercontent.com/pzaenger/angular-leaflet/master/preview-2.png)

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
