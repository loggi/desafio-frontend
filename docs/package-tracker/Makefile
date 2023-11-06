DOCKER_IMAGE_NAME = packer-tracker
DOCKER_CONTAINER_NAME = packer-tracker-container

APP_PORT= 3000
DOCKER_PORT= 3000

all: build run

build: 
	docker build -t $(DOCKER_IMAGE_NAME) .

run: 
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p $(DOCKER_PORT):$(APP_PORT)  $(DOCKER_IMAGE_NAME)

stop: 
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

clean: stop
	docker rmi $(DOCKER_IMAGE_NAME)

dev: 
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p $(DOCKER_PORT):$(APP_PORT)  $(DOCKER_IMAGE_NAME) npm run dev

exec:
	docker exec -it $(DOCKER_CONTAINER_NAME) $(CMD)

lint: 
	make exec CMD="npm run lint"

test: 
	make exec CMD="npm test"

.PHONY: build run stop clean dev exec lint test 