const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user");
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://dopoka:<db_password>@#@cluster0.z6ehw4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
});

app.listen(4000);
