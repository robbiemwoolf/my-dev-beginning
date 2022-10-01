// Node, Express, and Postgres 35

    // overview:In this module, you have been hired as a backend developer by Thinkful Gifts, an e-commerce store where "you can pick thoughtful gifts for thankful recipients." You have been tasked with setting up a database and building out an inventory API that provides the inventory management department with access to inventory data to help them make informed decisions for the business.

// Knex Configuration 35.2

    // overview: You are now ready to begin building out the inventory API. To connect your Express server with a PostgreSQL database, you will use a tool called Knex, which you will install, set up, and configure in this lesson. 

// Knex is a SQL query builder library that you can use with different types of databases (not only PostgreSQL) with Node.js. It allows you to build complex SQL queries using JavaScript

// Install the Knex library and the Node-Postgres database libary

// npm i knex pg

// Create a knexfile.js which contains database configurations across different environments.

// npx knex init

// update knexfile with your config settings