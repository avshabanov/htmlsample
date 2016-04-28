
NBIN		= ./node_modules/.bin

.PHONY: test

# Targets

all: test

node_modules:
	npm install --save-dev

test: export PHANTOMJS_EXECUTABLE = $(NBIN)/phantomjs
test: node_modules
	$(NBIN)/casperjs test ./test/hello-twitter-test.js


