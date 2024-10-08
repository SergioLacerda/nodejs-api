# nodejs-api
NodejS + server + rest api

Follow this steps to up an node server with an default API

## Changes

```
the file `index.js` will be changed to `Application.js`   
```

## Refactoring

### 1 Files structure

In this step we gonna split behaviour into four files:

1 - Application.js -> will be load routes, and start server
2 - Server.js -> here will start all application. Will load databases(if have) and the server(app)
3 - Routes.js -> Here we create REST API's, the input interface of this app
4 - Controller.js -> Here we gonna work with app logic.

### 2 Project structure
In `package.json` we will add the config:
```
  "type": "module"
```

This will allows to use "import / export" feature of javascript ECMA

## Run
OBS: in previous version all server are inside "index.js", now we change to this:

```
npm run src/server.js
```

## Test

Once server is running call this URL:
```
http://localhost:3000
```


## Next steps will be on branch:
```
feature/V3
```
