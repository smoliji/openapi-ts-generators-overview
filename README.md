# OpenAPI TS Generators Overview

This repo provides an overview of code generators for an OpenAPI spec.

Main goal is to provide working examples on how to use these generators and provide my personal rating of the overall DX. I am specifically interested in Node.js and TypeScript, for both backend and frontend.

API spec for all generators are the same - the petstore example. See `openapi.yaml`. But because I know there is a history with openapi tools and "reserved" keywords, I have added a `public: boolean` property to a pet schema.

Every generator has its Dockerfile that contains build instructions and can be invoked with `docker build -f Dockerfile.<generator> --output=results/<generator> .`.

Basic usage is then provided in `index.<generator>.ts` files.

## Observations

Let's start with the official OpenAPI Generator.

### [OpenAPI Generator](https://openapi-generator.tech) with `typescript` generator

- There are 34 files generated and the usage is documented in the generated [README.md](./results/openapi-generator/output/README.md)
- Code is generated as classes,
  - ⭐️ Every model has its class as the data container that includes metadata about it (attributes and their types, OpenAPI discriminator etc.)
  - ⭐️ API Gateway, Authentication, Servers, Server Configuration as classes - almost every component of the spec is represented
  - All code nicely oraganized into Node.js modules
  - RXJS and Promise API
  - 🚩 There is also unused code, like `ObjectParamAPI` 🤷
  - Generated code is supposed to be used as a library
  - ⭐️ API Gateway code comes with "middleware" functionality that you can use to modify requests and responses, e.g. for tests
- Your HTTP API client can either be specified during the codegen, or at the runtime if you implement the required interface
- 🚩 My `public` property comes with a flaw, because while I added `public` property to the Pet model, you need to use `_public` in the code, but luckily the request arrives as defined `public` (Somehow every generator has this [reserved keywords](https://openapi-generator.tech/docs/generators/typescript/#reserved-words), polluting the generated code; I honestly don't know why, because there is no issue having `public` as a property name and there are so many way around this, but for some reason, openapi gen chose to pollute the SDK API)
- 🚩 Generator CLI runs on Java and you need JDK, which usually less of a problem when using the dockerized version, but it is also required when you install the npm package - as a tool for Node.js stack, non-native JavaScript libraries are harder to work with
- 🚩 Type safety is almost non-existent, the way you build objects, you will discover that some property is required in the runtime

Next up: Orval

### [Orval](https://orval.dev/)

- Generated code contains just one [file](./results/orval/output/index.ts)
- ⭐️ Very minimalistic compared to the previous generator
  - No classes, just interfaces and functions
  - There is interface for every model in the spec, responses, request params etc.
  - ⭐️ Functions are named after the operationId, accepting request body and params, contain minimal logic for making the request with specified HTTP function and returning simple object with status and data
- My `public` property, as expected with normal tooling, works as expected, no escaping anywhere, just property as any other
- Server URL must be specified before the codegen
- ⭐️ Feels like a TypeScript-in-mind library
- ⭐️ It can generate [zod schemas too](https://orval.dev/guides/zod) and other well documented functionality

Next up: Swagger Typescript API

### [Swagger Typescript API](https://github.com/acacode/swagger-typescript-api)

- Generated code also contains just one [file](./results/swagger-typescript-api/output/Api.ts), similar size to Orval's
- Generated code contains again simple interfaces for the models, request params etc.
  - ⭐️ Interfaces now include jsdoc comments from the spec
  - There are classes for HTTP API client for common interface to make requests, and there is a class for the API client itself
  - The overall structure feels less polished than Orval's, but still pretty good 
- ⭐️ Feels like a TypeScript-in-mind library

Next up: NSWag

### [NSwag](https://github.com/RicoSuter/NSwag)

I am not trying this one due to warning on npm: "This NPM module requires Full .NET Framework 4.6.2+ or .NET 6.0+ to be installed on your system!"

Unpacked Size 20 MB 🧐 ...I am not a package size nazi person, but 20 MB feels like a lot.

Next up: TS Rest

### [TS Rest](https://ts-rest.com/)

- Installation of TS Rest requires also `zod`
- Bummer, TS Rest is not a generator, but a library that let's you define a contract, written in TypeScript, that you share between server and the client, and with provided HTTP Client and HTTP Server you can keep your client-server interface in sync

Next up: OpenAPI TypeScript

### [OpenAPI TypeScript](https://openapi-ts.dev/)

- OpenAPI TypeScript is a generator only for TypeScript schemas, not for a code stub you can use
- ⭐️ Generated code is a single file [index.ts](./results/openapi-typescript/output/index.ts) that represents the spec in a TypeScript interface
  - There are top level interfaces paths, operations, components etc.

### [OpenAPI Generator](https://openapi-generator.tech) with `nodejs-express-server` generator

- Let's not forget that OpenAPI Generator provides a variety of generators, not just client TypeScript mentioned above. Let's see what we get with `nodejs-express-server`
- 🚩 Again, there is a nice readme file [README.md](./results/openapi-generator-node/output/README.md), also mentioning a great note, revealing how up to date the generator is:
  > The code was written using Node version 10.6, and complies to the Airbnb .eslint guiding rules.
  
  Feels like back in 2018
- Generated code again generates a lot of files
  - Files are structured into api, controllers, services etc. - just as a 2018 Node.js project would have
  - Includes server with express, winston logger, linting
  - Services are where the implementation should go, there are only stubs


## Summary

- Use OpenAPI TypeScript if all you need are types and interfaces from API Spec
- Use Orval if you need types, interfaces and you are also interested in Zod schemas and some client code
- Try Swagger Typescript API if Orval is not working for you
- Use TS Rest if you have an easy way to share code between client and server (like a monorepo) and you want to link these two parts together
- Note to my self: Stay far away from OpenAPI Generator and if possible, find a reason behind the existence of the project, because it feels like a cargo cult programming playground with a pinch of throwing obstacles in developers' way. _I am really sorry for being so negative about the project, open-source, I can use it for free, but I am used to libraries that are help me build software and somehow OpenAPI Generator manages to do quite the opposite in every step of the way, making the process more complicated with quiestionable results in the end. I partly do believe that the issues are with the TypeScript only and it works with other platforms and languages_.



