generator-isomorphism-koa2-react
===
![https://www.npmjs.com/package/generator-isomorphism-koa2-react](https://img.shields.io/badge/npm-v1.0.0-blue.svg)

introduce
---
Based on [`yeoman generator`](http://yeoman.io/generator/ "generator"),auto deployment [`ismorphism-koa2-react`](https://github.com/timmyLan/isomorphism-koa2-react) project.

install
---
* install yo using npm:
```
 npm install -g yo
```
* install [`generator-isomorphism-koa2-react`](https://github.com/timmyLan/generator-isomorphism-koa2-react):
```
 npm install -g generator-isomorphism-koa2-react
```
* mkdir && cd your project directory,eg:
 ```
  mkdir test && cd test
 ```
* run isomorphism-koa2-react with yo
```
 yo isomorphism-koa2-react
```
* answers
```
? What's the Project name(isomorphism-koa2-react)
? What's the Project version(1.0.0)
? What's the Project description()
? What's the Project git repository()
? What's your name()
```
* finish
```
 npm start
```

scripts
---
```
    "start": "node bin/development.js",
    "production": "node bin/production.js",
    "build": "npm run clean && webpack --config webpack.build.js",
    "clean": "rm -rf public/build/ && rm -rf dist/",
    "test": "./node_modules/karma/bin/karma start test/karma.conf.js",
    "dev": "npm start"
```
