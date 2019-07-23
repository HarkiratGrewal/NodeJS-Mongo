> Search docker containers
#Running
docker ps
#All
docker ps -a

> Search for docker images
docker images
#filtered
docker images <e.g. node>
#adv. search
docker images --filter <SearchCriteria>

> Delete dangling or <none> tagged images with command
docker images | grep none | awk '{ print $3; }' | xargs docker rmi

> Remove not used docker images using
docker rmi <Repository>:<Tag>

> Composing and creating containers
docker-compose build
docker-compose up
#Search docker image
docker ps -a
docker exec -it <nodeContainerID> sh
node dbSeeder.js
#Exit the session from shell
exit


/*Kill all nodes running*/
#Check
lsof -i :3000
#Kill
killall node

#Running on browser
/*Nodemon*/
nodemon server.js
* nodemon /DB/dbConnection.js || node /DB/dbConnection.js  #Unnecessary

/*Docker*/
Link: localhost:9000
Rest Api: localhost:9000/data
          localhost:9000/data:id


/*MONGO-DB*/
#Start
brew services start mongodb-community@4.0
#Stop
brew services stop mongodb-community@4.0
#Restart
brew services restart mongodb-community@4.0


/*Check ports occupied*/
lsof -iTCP -sTCP:LISTEN -P