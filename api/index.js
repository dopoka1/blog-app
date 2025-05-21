const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user");
const bcrypt = require('bcrypt');
const app = express();

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dopoka:K00li000@cluster0.ajahihp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
});

app.listen(4000);
