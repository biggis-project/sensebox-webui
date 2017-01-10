# Configuration
APP=index.js
DISTDIR=dist

# Executable tools
JSPM=./node_modules/.bin/jspm
JSPMSERV=./node_modules/.bin/jspm-server

help:
	@echo "Useful targets: init clean hot depcache"

clean:
	rm -rf jspm_packages
	rm -rf node_modules

init:
	npm install
	${JSPM} install

hot:
	@echo "==========================================="
	@echo "Keep this running in a separate terminal..."
	@echo "==========================================="
	${JSPMSERV} --only-exts=".js, .css"

depcache:
	${JSPM} depcache ${APP}
