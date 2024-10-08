# nodejs-api
NodejS + server + rest api + DOCKER

Follow this steps to up an node server with an default API


## Changes on V3

We will add docker to this app

OBS: Your S.O. need to have `docker` installed


### 1 Files structure

1 - Create docker file: `Dockerfile` and copy content like the created one.

In file `package.json`  we will add two scripts to help:
```
    "dockerBuild": "docker build -t node-maroto-api --no-cache --network host -f ./Dockerfile .",
    "dockerRun": "docker run -p 3000:3000 node-maroto-api"
```

## Run

OBS: The previous steps are already working, you can run app locally using V1 and V2 readme steps.

```
npm run dockerBuild
```

```
npm run dockerRun
```

## Test

Once server is running call this URL:
```
http://localhost:3000
```


## Next steps will be on branch:
```
feature/V4
```
