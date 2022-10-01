// Node, Express, and Postgres 35

// Seeding Data With Knex 35.5

    // overview: Now that you have the required tables in your database, it's time to add some test data. Typically, when building an application, it is useful to run the application with sample data to make sure that the application logic is correct. Similar to migrations, Knex allows you to create scripts to insert data into your tables. Using scripts to insert test data into a database is called seeding the database.

// Seed The Database

    // To create seed date, you will have to follow a few steps:

        // 1 Define a location for storing your seed scripts.

        // 2 Create the seed scripts.

        // 3 Update the seed scripts.

        // 4 Run the seed scripts.

    // 1 Add a seeds script to knexfile.js just as you did with the migration script

        seeds: {
            directory: path.join(_dirname, 'src', 'db', 'seeds')
        }

    // 2 npm knex seed:make seed_name

    // knex automatically creates a timestamp for migration files so that they are always kept in order but this isn't the same for seed files

    // We can increment the seed files in the filenames for example:

    // npx knex seed:make 00-suppliers
    // npx knex seed:make 01-products
    // npx knex seed:make 02-categories
    // npx knex seed:make 03-products_categories

// Now Update The Seed Scripts
        const suppliers = require('../fixtures/suppliers')

        exports.seed = function (knex) {
            return knex
                .raw('TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE')
                .then(function () {
                    return knex('table_name').insert(suppliers)
                })
        }

// After updating the other seed scripts we can run all four at once with:

        // npx knex seed:run

// If you ever want to run a specific seed file only, you can execute the following:

    // npx knex seed:run --specific=seed-filename.js