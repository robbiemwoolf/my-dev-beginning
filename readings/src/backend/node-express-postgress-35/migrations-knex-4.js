// Node, Express, and Postgres 35

// Migrations with Knex 35.4

    // overview: n this module, you'll go through the steps to create and define your migration files and then execute the migration

// Migrations serve as a version-control file for your database, allowing you ti easily modify and share the application's database schema with your coworks.

// If you update your database only to realize that there were mistakes in the update, you can easily run and roll back migrations using command-line tools.

// Database migrations define each change made to your database in a migration file that is tracked by version control.: 
migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations')
}

// Create a migration file

// npx knex migrate:make [migration_name]

// this creates timestamp_migrationname.js file

// template includes two function 

    exports.up = function (knex) {
        // fill in with your code
        return knex.schema.createTable('suppliers', (table) => {
            table.increments('supplier_id').primary() // sets supplier_id as the primary key
            table.string('supplier_name')
            table.text('supplier_notes')
            table.timestamps(true, true) // adds created_at and updated_at columns
        })            
    }
    exports.down = function (knex) {
        // drop table
        return knex.schema.dropTable('suppliers')
    }

// Run the latest migration manually
   
    // npx knex migrate:latest

// Sometimes, a developer might make a mistake and need to revert changes to tthe tables after deploying to proudction

// Roll back the latest migration

    // npx knex migrate:rollback

// Modify A Table

    // Sometimes, a developer might also have to make updates to a table, such as altering the name of a column or adding a new column to a table.

    // The process of renaming a column is similar to creating a table.

    // Instead of modifying the existing migration, you will create a new migration to specifically rename the column.

    // make another migration file

    // example code for new migration file

    exports.up = function (knex) {
        return knex.schema.table('products', (table) => {
            table.renameColumn('product_name', 'product_title')
            table.decimal('product_price')
        })
    }

    exports.down = function (knex) {
        return knex.schema.table('proucts', (table) => {
            table.renameColumn('product_title', 'products_name')
            table.dropColumn('product_price')
        })
    }

// As you run more and more migrations on your project, you might want to keep track of which migrations are completed and which are pending. Run the following command:

    // npx knex migrate:list

// UNDO A SPECIFIC MIGRATION

    // npx knex migrate:down migration_file_name

    // to change it back with

    // npx knex migrate:up migration_file_name
