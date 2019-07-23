---
noteId: "e7f46680acdb11e99d1d950d2c6c36eb"
tags: []

---

# Step:1 Create an ExpressJS app
  1. npm init
  2. Fill in all the details, set entry point to server.js        * package.json file is created
  3. Download ExpressJs using:
    $ npm install express --save      * We use save to add the dependency to package.json
  4. Download nodemon (responsive node):
    $ npm install nodemon --save
  5. Create the following directories:
    a. DB (for database)
    b. app (for expressjs app)
  6. Add following directory and files as shown in heirarchy:
    a. app
      => controllers
        - note.controller.js  * CRUD functionality
      => models
        - note.model.js       * Schema for DB
      => routes
        - note.routes.js      * Routes for redirecting the application accordingly

    b. DB
      - dbConnection.js       * Connection of db
      => config
        - db.config.js        * Configuration details for dbConnection.js file
    
    - server.js               * Creating and running express js app
      
  > Execution
  1. Run the folloeing command:
    $ nodemon server.js

# Dockerizing the app
  > Structure
  {
    - Container 1: NodeJS{
      * Steps:
      1. Creating Dockerfile in root directory of application (look at Dockerfile for details)
      2. Creating docker.yml to build and run the container for nodeJS
    }
    - Container 2: MongoDB{
      * Steps:
      1. Adding mongo image specify the port to expose
    }
  }
  > Running
    => Building:
      - Both at once
        $ docker-compose build
      - Single container build
        $ docker-compose build <containerName>
    
    => Running:
      - Both at once (Suggested)
        $ docker-compose up
      - Single container
        $ docker-compose up <containerName>

    => Stopping / Terminating
      $ {press}(CTRL + C)

    => Deleting containers
      - All at once
        $ docker-compose down
      - Single container
        $ docker-compose down <containerName>