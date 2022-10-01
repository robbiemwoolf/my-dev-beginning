// Node, Express, and Postgres 35

// Connecting To The Database With Knex 35.3

    // overview: In the previous lesson, you created a simple database configuration for your development environment using a knexfile.js. Now, you are ready to connect to your ElephantSQL database with Knex.

// terms:

    // environment variable: also called an env var, a key-value pair held by your current operating system and user

// How do you configure the server so that it knows which database it should connect to in different environments? You can make use of environment variables, which are key-value pairs stored in the application's environment. Your development environment will be different than the environment that you're deploying to.

// You can use the popular dotenv library to manage your environment variables. You can store your environment variables in a .env file, and dotenv will then inject environment variables into the appropriate environment.

// Install the dotenv library

// npm i dotenv

// Add these lines to your knexfile

    // require('dotenv').config()
    // const { DATABASE_URL } = process.env

// update line

    // connection: DATABASE_URL

// CREATE connection.js file in /src/db/

        const env = process.env.NODE_ENV || "development";
        const config = require("../../knexfile")[env];
        const knex = require("knex")(config);

        module.exports = knex;