
## Build

Install everything locally (run once):

```
npm install --save-dev
```

Build app:

```
./node_modules/grunt-cli/bin/grunt
```

Then open build/index.html in the browser


### Alternative build

Install locally everything needed for the build:

```
bash ./scripts/install-dev.sh
```

### Run tests

```
bash ./scripts/run-tests.sh
```

### Build Single Javascript

```
./node_modules/grunt-cli/bin/grunt
```

## Intellij Setup

Mark as excluded:

* ``node_modules``
* ``build``

## TODOs

### jquery + backbone dependencies in package.json

```
    "backbone": "^1.1.2",
    "jquery": "^2.1.0",
    "underscore": "^1.6.0",
```

### Browserify (for requirejs)

See also https://www.npmjs.com/package/grunt-react
