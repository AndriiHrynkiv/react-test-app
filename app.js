const express = require('express');
const mongoose  = require('mongoose');
const app = express;
const PORT = 5000;

async function start () {
    try {
        await mongoose.connect('mongodb+srv://andriiHrynkiv:<88A86n1988>@cluster0.3ym9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        app.Listen(5000, () => `app is working on PORT ${PORT}`)
    } catch (e) {
        console.log(e);
    }

 }

 start()

