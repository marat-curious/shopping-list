# Start Docker Containers

docker-compose up -d

# Stop and Delete Containers

docker-compose down

# Enter Docker Container

`docker exec -it [container-id] bash`

# Curl Command for Check API

* curl -X POST -H "Content-Type: application/json" -d '{ "name": "Aushan" }' http://localhost:8000/api/shop
* curl -X DELETE -H "Content-Type: application/json" -d '{ "name": "Aushan" }' http://localhost:8000/api/shop
* curl -X GET -H "Content-Type: application/json" http://localhost:8000/api/shop
* curl -X PUT -H "Content-Type: application/json" -d '{ "nameCur": "Aushan", "nameNew": "Ашан" }' http://localhost:8000/api/shop
