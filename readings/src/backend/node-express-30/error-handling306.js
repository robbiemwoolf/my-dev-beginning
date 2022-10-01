// Node and Express 30

// error handling 30.6

    // overview: Remember that even if a user sends a bad request to your server, you should still respond. As you'll see in this lesson, Express comes with some built-in ways to handle errors that reduce the amount of code that you have to write.

// not found Error handler

    // one common error is that the user may attempt to go to a route that is missing.

    app.use((req, res, next) => {
        res.send(`The route ${req.path} does not exist!`)
    })