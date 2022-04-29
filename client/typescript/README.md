# triton-grpc-client for Node.js with TypeScript support

## Prerequisites

- Node.js >= 14

## Usage

```typescript
import { TritonCoreAPI } from '@cyberagentai/triton-grpc-client'
import { credentials } from '@grpc/grpc-js'

const tritonClient = new TritonCoreAPI('localhost:8001', credentials.createInsecure())
```


## How-to: develop, check, build, and publish

- development
    - Specify triton-lib version in `package.json` e.g. `r22.02`
    - Implement wrapper APIs in `index.ts` 
    - Implement other utils such as triton's tensor operations in `utils.ts`
- check
    - `yarn format`
    - `yarn type-check`
    - `yarn test`
    - `yarn coverage`
- build check
    - `yarn build`
- tag new version
    - `npm version (prerelease|...)`
- publish
    ```sh
    yarn build
    yarn publish
    ```

## Generating TypeScript ready codes

### tl;dr
This will copy both generated codes and their types, and `.proto` files into  `src/triton`.

```sh
yarn generate
```

### Under the hood

1. Retrieve Triton's gRPC definitions
    ```sh
    # example: using release r22.02
    # this will execute commands below:
    # git clone https://github.com/triton-inference-server/common -b r22.02 ./src
    yarn fetchProto
    ```
1. If you prefer static TS codes
    ```sh
    # this will execute protoc command
    # this may need `google-protobuf` npm package
    yarn generateStaticLib
    ```
1. (Recommended) Reflection based code generation with proto-loader, which automatically wraps getter/setter and etc.
    ```sh
    yarn generateTypes
    ```
    - cf. https://github.com/protobufjs/protobuf.js#usage-with-typescript
1. Place generated codes into `src/`, with definitions (for proto-loader)