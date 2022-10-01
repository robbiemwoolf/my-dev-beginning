// Backend Deployment 36

// Deploying the Server 36.3

    // overview: In this lesson, you are going to deploy an app using Heroku. As you learned in the Frontend deployment module, Heroku allows you to deploy web applications to the cloud for free using a couple of commands. In this lesson, you will use Heroku to deploy an Express.js app from scratch.

// mkdir project-folder
// cd project-folder
// touch server.js
        // add code
        const express = require('express')
        const cors = require('cors')
        const app = express()
        const router = express.Router()
        const PORT = process.env.PORT || 5000

        router.get('/', cors(), (req, res) => {
        res.json({ message: 'Hello Heroku!' });
        })

        app.use('/', router);

        app.listen(PORT, () => {
        console.log(`Server running on ${PORT} `);
        })

        module.exports = app

// touch package.json
        // Add code
        {
          "name": "name-generator",
          "version": "1.0.0",
          "engines": {
            "node": "12.13.0"
          },
          "description": "",
          "main": "server.js",
          "scripts": {
            "start": "node server",
            "server": "nodemon server.js",
            "client": "npm start --prefix client"
          },
             "keywords": [],
             "dependencies": {
               "express": "^4.17.1",
               "cors": "^2.8.5"
              },
              "devDependencies": {
                "nodemon": "^2.0.3"
            }
        }

// npm i
// npm start
// git init
// touch .gitignore
        // Add code
        # Dependency directories
        node_modules/

// heroku create
// git add .
// git commit -m "first commit"
// git push heroku main
// heroku open


// REDEPLOYING
    // git add .
    // git commit -m "updated project"
    // git push heroku main