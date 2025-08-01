### Generate Protobuf for GO

#### Ensure $GOPATH/bin is in your PATH:
```
export PATH="$PATH:$(go env GOPATH)/bin"
```
```sh
protoc --go_out=. --go-grpc_out=. --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative proto/[filename].proto

```

-	`--go_out=.`: Generates [filename].pb.go (basic message definitions).
-	`--go-grpc_out=.`: Generates [filename]_grpc.pb.go (gRPC service interface).
-	`--go_opt`=paths=source_relative: Keeps the generated files in the same directory structure as your .proto file.
-	`proto/[filename].proto`: Path to your .proto file.

#### Simple Usage
```sh
protoc --go_out=. --go-grpc_out=. [folder/file.proto]
```
