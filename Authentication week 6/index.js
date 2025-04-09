const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randOMKAR";
app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check if username already exists
    if (users.find(u => u.username === username)) {
        return res.status(400).json({
            message: "Username already taken"
        });
    }

    // Add new user
    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "Signup successful"
    });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find user
    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (foundUser) {
        const token = jwt.sign({ username: username }, JWT_SECRET);
        res.json({ token: token });
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        });
        console.log(users);
    }
});

app.get("/me", function (req, res) {
    const token = req.headers.token;

    try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        const username = decoded.username;

        // Find user by username from decoded token
        const foundUser = users.find(u => u.username === username);

        if (foundUser) {
            res.json({
                username: foundUser.username // Don’t send password!
            });
        } else {
            res.status(401).json({
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});