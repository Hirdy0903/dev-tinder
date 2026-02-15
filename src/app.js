const express = require('express');
const connectdb = require('./config/database');
const app = express();
const User = require('./models/user');

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const userObj = {
            firstName: "virat",
            lastName: "kohli",
            email: "virat@example.com",
        };

        // creating a new instance of the user model and saving it to the database
        const user = new User(userObj);
        await user.save();

        res.status(201).send("User created successfully");
    } catch (err) {
        res.status(500).send("Error creating user");
    }
});

connectdb()
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });
