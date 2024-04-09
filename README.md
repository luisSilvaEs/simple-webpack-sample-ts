# README

Simple web app to practice the use of Webpack. This app contains a button that on click changes the content of a string.

## Technologies used:

- TypeScript
- SASS
- Webpack

## How to use for development

1. Clone this repository [https://github.com/luisSilvaEs/simple-webpack-sample-ts](https://github.com/luisSilvaEs/simple-webpack-sample-ts) in your local
2. Install all dependencies: `npm install`
3. Run Webpack to generate _dist_ folder and transform TypeScript code into JavaScript code. Open a terminal and run `npm run dev`
4. To start up the app, open another terminal and run: `servor dist index.html 8088`
5. If the browser does not open automatically you can paste following URL in the browser to see the app up and running: [http://localhost:8088/](http://localhost:8088/)

## How to use for production

To bundle the app for production enviromnent, which will generate a minified JS and the _bundle.js_ filename will include some hash to prevent cache issues, do the following:

`npm run build`

and then open another terminal and run: `servor dist index.html 8088`

## About dependencies

We use following Webpack loaders as follow:

- **ts-loader** to code using TypeScript
- **sass-loader** to compiles Sass to CSS
- **css-loader** translates CSS into CommonJS
- **style-loeader** inject CSS into the DOM inside a `<style></style>` tag

The following Webpack plugin is also installed

- **html-webpack-plugin** WebPack plugin to dynamically generates an HTML file (or multiple files) based on your Webpack bundle configuration and injects the necessary script tags for including your bundled JavaScript files. This plugin creates:
  - `<script></script>` tag automatically to call our JS in the DOM
  - Include the hashed names for JS and CSS files. This is useful for cache-busting, ensuring that clients always receive the latest version of your assets when they change.

Additionally,

- **sass** must be installed to handle SASS in our app

## Reference

- [Aprende Webpack paso a paso](https://www.youtube.com/watch?v=ansUGkcrhwY&t=873s)
- [How to setup Webpack config - tutorial for beginners](https://www.youtube.com/watch?v=HNb6bapmsyI)
- [Webpack 5 Fundamentals - 5. CSS & SCSS Loaders](https://www.youtube.com/watch?v=w5GRuAGEZFg)
