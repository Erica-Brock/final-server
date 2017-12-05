"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./routers/api");
const bodyParser = require("body-parser");
const sessions = require("client-sessions");
const app = express();
app
    .use(bodyParser.json())
    .use(sessions({
    cookieName: 'session',
    duration: 1000 * 60 * 30,
    activeDuration: 1000 * 60 * 5,
    secret: process.env.SESSION_SECRET
}))
    .use('/api', api_1.default);
app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});
