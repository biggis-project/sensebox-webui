# Configuration
APP=index.js
DISTDIR=dist

# Executable tools
JSPM=./node_modules/.bin/jspm
JSPMSERV=./node_modules/.bin/jspm-server

help:
	@echo "Useful targets: hot depcache bundle"

init:
	npm install
	${JSPM} install

hot:
	@echo "==========================================="
	@echo "Keep this running in a separate terminal..."
	@echo "==========================================="
	${JSPMSERV} --only-exts=".js, .css"

# prepare all bundles
bundle:
	${JSPM} bundle ${APP} bundle-${APP}

depcache:
	${JSPM} depcache ${APP}
