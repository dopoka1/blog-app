const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const secret = 'randomstring'

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://dopoka:<db_pass>@cluster0.ajahihp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passCheck = bcrypt.compareSync(password, userDoc.password);
    if (passCheck) {
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token);
            res.json('ok');
        });
    } else {
        res.status(400).json('Invalid credentials');
    }
});

app.listen(4000);
