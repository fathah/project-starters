## Docker

## Build Image
```
docker build -t {name} .
```

`docker build`: Builds the Docker image.

`-t flask-pass-generator`: Tags the image with the name flask-pass-generator.

`.`: Indicates the current directory as the build context.

## Run Docker Image
```
docker run -p {MACHINE_PORT}:{CONTAINER_PORT} {image_name}
```
### Run in Detached Mode
```
docker run -d -p {MACHINE_PORT}:{CONTAINER_PORT} {image_name}
```
