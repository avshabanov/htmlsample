# Babel+ReactJS makefile

# Destination directory, includes compiled client part of the application
TO			= target/sample-app

# Temporary folder, used for storing intermediate artifacts
TMP 		= target/tmp

# Local NodeJS executables
NBIN 		= ./node_modules/.bin

# Local server port
PORT 		= 8000

# Targets

.PHONY: clean browserify libs test watch compile server static


all: compile

# Dependencies, always installed locally (to not to require sudo permissions)
node_modules:
	npm install --save-dev

target:
	mkdir -p $(TO)/js

# Clean compilation artifacts
clean:
	rm -rf target

# Dependency: bootstrap CSS
$(TO)/libs/bootstrap:
	mkdir -p $(TO)/libs/bootstrap

# Copy library artifacts (such as external CSS dependency)
libs: target node_modules $(TO)/libs/bootstrap
	cp -r ./node_modules/bootstrap/dist/* $(TO)/libs/bootstrap

# Copy static files
static:
	mkdir -p $(TO)/media
	cp -r media/* $(TO)/media
	cp -r root/* $(TO)/

browserify: target
	$(NBIN)/browserify js/main.js -t babelify -o $(TO)/js/bundle.js

compile: libs static browserify


# Helper targets

# Start watcher that automatically recompiles application bundle
watch: node_modules libs target
	$(NBIN)/watchify js/main.js -o $(TO)/js/bundle.js -v -d -t babelify

# Run unit tests
test: node_modules target
	npm test

# Run local server
server: node_modules target
	$(NBIN)/http-server $(TO) -p $(PORT) --utc


