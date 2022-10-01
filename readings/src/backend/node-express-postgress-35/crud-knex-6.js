// Node, Express, and Postgress 35

// CRUD with Knex 35.6

    // overview: use Knex to perform CRUD operations (create, read, update, and delete) on your PostgreSQL database

// In your preliminary discussions with the inventory management department, you determined that your API should provide access to the following endpoints:

// HTTP verb    Path    Description
// GET      /categories Retrieve a list of all categories
// GET      /products   Retrieve a list of all products
// GET  /products/:productId    Retrieve a product by ID
// POST     /suppliers  Create a new supplier
// PUT  /suppliers/:supplierId  Update a specific supplier
// DELETE   /suppliers/:supplierId  Delete a specific supplier

// Trying to access any other API endpoints should return a 405 error to the API consumer.

// In the real world, complex SQL queries can quickly make your codebase difficult to read. Instead of writing raw, and often verbose- SQL queries from scratch, you can use Knex.

// Knex allows you to write JavaScript to build SQL commands for various CRUD operation using a relatively clean syntax.

// Starter code Node, Express, and Postgres Starter

// Services

    // Where should you store the code for generating the database queries?

        // The most straightforward option is probably to include all the database query logic in your *.controller.js files

            // However, as your API and codebase continue to grow in size and complexity over time, putting all your queries there would quickly clutter up your application logic and make your code difficult to test and reuse.

    // Other potential problems when building express API  applications:

        // Long files containing endpoint code and database query code are hard to navigate

        // If multiple parts of the codebase need to perform similar database queries, it is better to reuse them

        // If you want to change something like the name of the table, column name, or type of database, it is better to have to update fewer parts of the code with this new change.

    // To alleviate these problems, you can use some of the following best practices:

        // DRY Don't Repeat Yourself for using functions

        // SOC Separation of concerns for organizing functions

        // Modularization and Layering to structure files

        // Encapsulation for bundling methods together that operate on the same data

    // More concncretely, you can introduce a service into your Express application.

        // A service, which is just regular old JavaScript, aims to group togeether related functions as a service to the rest of your application

        // Services are typically self contained, so they could be remotely called or imported as a local module and not depend on data already being available.

    // A service aligns with these best practices:

        // A service makes the code DRY because you can use the service methods in multiple places if needed.

        // A service helps with SOC because it is responsible for only one set of concerns.

        // You can move some code out of your middleware or controllers and into a service, which increases modularization.

// Knex Syntax

    /*
    SELECT * FROM categories; // SQL query select all columns from categories table
    
    knexInstance.from('categories'); // tell Knex instance which table to query

    knexInstance('categories'); // same thing as previous line

    knexInstance("categories").select('*'); // chain a select() method to choose which columns to select
    */

    // SQL query
    SELECT * FROM categories
    WHERE category_id =2;

    // Same query in Knex
    knexInstance('categories').select('*').where({ category_id: 2})

// The Knex instance methods only build the query, not execut it. To execute the query, you will need to chain the then() promise method to end of the Knex query, like this:

    knexInstance
        .from('categories')
        .select('*')
        .then((result) => {
            console.log(result)
        })

// GET /categories Endpoint

    // DO THIS: Create the categories service object in categories.service.js

    const knex = require('../db/connection')

    function list() {
        return knex('categories').select('*')
    }

    module.exports = {
        list,
    }

    // Require the categories service object in categories.controller.js

    const categoriesService = require('./categories.service')

    function list(req, res, next) {
        categoriesService
            .list()
            .then((data) => res.json({ data }))
            .catch(next)
    }

// GET /products endpoint

    // products.service.js

    const knex = require('../db/connection')

    function list() {
        return knex('products').select('*')
    }

    module.exports = {
        lists,
    }

    // products.controller.js

    const productsService = require('./products.service')

    function list(req, res, next) {
        productsService
            .list()
            .then((data) => res.json({ data }))
            .catch(next)
    }

// GET /products/:productId endpoint

// Add read() to products.service.js

    function read(productId) {
        return knex('products')
            .select('*')
            .where({ product_id: productId })
            .first()
    }

// Add productExists() validation middleware and read() to products.controller.js

    function productExists(req, res, next) {
        productsService
            .read(req.params.productId)
            .then((product) => {
                if (product) {
                    res.locals.product = product
                    return next()
                }
                next({ status: 400, message: `Product cannot be found.`})
            })
            .catch(next)
    }

    function read(req, res) {
        const { product: data } = res.locals
        res.json({ data })
    }

    module.exports = {
        read: [productExists, read],
        list,
    }

// Route Params Validation With Regex

    // You can validate a route param using regex. For example, to ensure that a route param :movieId in the path movies/:movieId consists of just one or more digits, you can prepend the regex expression ([0-9]+) to the end of the path, as follows:

    app.get('/movies/:movieId([0-9]+', moviesController)

// Validate :productId with regex

    // In src/products/products.router.js, modify the /products/:productId route, as follows:

        router.route('/:productId([0-9]+').get(controller.read).all(methodNotAllowed)

// POST /suppliers endpoint

    // suppliers.service.js

    const knex = require('../db/connection')

    function create(supplier) {
        return knex('suppliers')
            .insert(supplier)
            .returning('*')
            .then((createdRecords) => createdRecords[0])
    }
      
    module.exports = {
        create,
    }

    // suppliers.controller.js

    const suppliersService = require('./suppliers.service.js')

        // create validation middleware

        const VALID_PROPERTIES = [
              "supplier_name",
              "supplier_address_line_1",
              "supplier_address_line_2",
              "supplier_city",
              "supplier_state",
              "supplier_zip",
              "supplier_phone",
              "supplier_email",
              "supplier_notes",
              "supplier_type_of_goods",
            ];
            
            function hasOnlyValidProperties(req, res, next) {
              const { data = {} } = req.body;
            
              const invalidFields = Object.keys(data).filter(
                (field) => !VALID_PROPERTIES.includes(field)
              );
            
              if (invalidFields.length) {
                return next({
                  status: 400,
                  message: `Invalid field(s): ${invalidFields.join(", ")}`,
                });
              }
              next();
            }

            // Add another validation middleware hasProperties(), we will put this in its own file in the errors folder

            function hasProperties(...properties) {
                return function (req, res, next) {
                    const { data = {} } = req.body

                    try {
                        properties.forEach((property) => {
                            if (!data[property]) {
                                const error = new Error(`A '${property} property is required.`)
                                error.status = 400
                                throw error
                            }
                        })
                        next()
                    } catch (error) {
                        next(error)
                    }
                }
            }

            module.exports = hasProperties

        // include this at top of suppliers/suppliers.controller.js

        const hasProperties = require('../errors/hasProperties')
        const hasRequiredProperties = hasProperties('supplier_name', 'supplier_email')

        // then add the create() function
        
        function create(req, res, next) {
            suppliersService
                .create(req.body.data)
                .then((data) => res.status(201).json({ data }))
                .catch(next)
        }

        module.exports = {
            create: [
                hasOnlyValidProperties, hasRequiredPropertie,
                create]
        }