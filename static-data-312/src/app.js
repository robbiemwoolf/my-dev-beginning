const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// return a single user by id from /users/:userId in form of { data: Object }
app.use("/users/:userId", (req, res, next) => {
    const { userId } = req.params;
    const foundUser = users.find((user) => user.id === Number(userId));
  
    if (foundUser) {
        res.json({ data: foundUser });
    } else {
        next(`User ID not found: ${userId}`);
    };
});

// return an array of users from /users in form of { data: Array }
app.use("/users", (req, res) => {
    res.json({ data: users });
});

// Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.use('/states/:stateCode', (req, res, next) => {
    const { stateCode } = req.params;
    const state = states[stateCode];
    if (state !== undefined) {
        res.json({ data: { stateCode: stateCode, name:state }})
    } else {
        next(`State code not found: ${ stateCode }`)
    };
});

// return all states from /states in the form of { data: Array }
app.use("/states", (req, res) => {
    res.json({ data: states });
});

// not-found handler
app.use((req, res, next) => {
    next(`Not found: ${req.originalUrl}`);
});

// error handler
app.use((err, req, res, next) => {
    res.send(err);
});

module.exports = app;