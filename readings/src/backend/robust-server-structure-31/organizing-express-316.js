// Robust Server Structure 31

// Organizing Express Code 31.6

    // overview: By the end of this lesson, you will be able to organize code into small files grouped by resource. You'll also be able to use the express.Router class to create modular, mountable route handlers.

// terms:

    // group-by-resource: A file organization structure in which any code that handles requests to a resource is stored in a folder with the same name as the resource, regardless of the URL to that resource

    // controller file: A file that defines and exports the route handler functions and is responsible for managing the state of a single resource in an API

    // express router: A modular middleware and routing system that can be attached to an Express app