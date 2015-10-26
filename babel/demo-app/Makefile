
TO			=	target/demo-app
NBIN		= ./node_modules/.bin

.PHONY: clean browserify test watch


# Targets

node_modules:
	npm install --save-dev

target:
	mkdir -p $(TO)
	mkdir -p $(TO)/js

clean:
	rm -rf target

watch: node_modules target
	$(NBIN)/watchify -o $(TO)/js/bundle.js -v -d js/app.js
	
browserify: node_modules target
	$(NBIN)/browserify . -t [envify --NODE_ENV production] -t [babelify --stage 0] | $(NBIN)/uglifyjs -cm > $(TO)/js/bundle.min.js

test: node_modules target
	npm test




