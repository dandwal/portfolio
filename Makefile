.phony: build-dev
build-dev:
	docker build -t portfolio:dev .

.phony: build-prod
build-prod:
	docker build -f Dockerfile.prod -t danny4kk/portfolio:prod .

.phony: run-dev
run-dev: build-dev
	docker run \
        -it \
        --rm \
        -v ${PWD}:/app \
        -v /app/node_modules \
        -p 3000:3000 \
        -e CHOKIDAR_USEPOLLING=true \
        portfolio:dev

.phony: run-prod
run-prod: build-prod
	docker run \
		-it \
		--rm \
		-p 1337:80 \
		danny4kk/portfolio:prod

.phony: deploy
deploy:
	docker push danny4kk/portfolio:prod
	# TODO tag releases with a new version number taken from an argument
	docker tag danny4kk/portfolio:prod danny4kk/portfilio:latest