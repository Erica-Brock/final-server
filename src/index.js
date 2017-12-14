"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./routers/api");
const bodyParser = require("body-parser");
const db_1 = require("./config/db");
const sessions = require("client-sessions");
const http_1 = require("http");
const socket = require("socket.io");
const index_1 = require("./config/db/index");
const app = express();
const server = http_1.createServer(app);
const io = socket.listen(server);
app.use(bodyParser.json());
io.on('connection', (socket) => {
    socket.on('disconnect', function () {
    });
    socket.on('add-message', (message) => {
        index_1.procedure('spInsertMessage', [message.user_id, message.chat_id, message.message])
            .then((pack) => {
            io.emit('message', pack[0][0]);
        });
    });
});
// I AM GOING TO IMPORT THE GETS HERE FOR THE INDEX DATABASE FOR THE INSTANT SEARCH AND ALSO FOR THE CHAT ROOM
// AS OF NOW I DO NOT HAVE TIME TO ROUTE THEM ALL OUT AND MAKE CONTROLLERS OR PROCEDURES FOR THEM ALL 
//CHATROOM FUNCTIONS
app.get("/api/chat/rooms/:id", (req, res, next) => {
    index_1.procedure("spGetChatroomsByUser", [+req.params.id])
        .then((chatrooms) => {
        res.json(chatrooms[0]);
    });
});
app.get("/api/chat/messages/:id", (req, res, next) => {
    index_1.procedure("spGetMessagesByChatroom", [+req.params.id])
        .then((messages) => {
        res.json(messages[0]);
    });
});
app
    .use(bodyParser.json())
    .use(sessions({
    cookieName: 'session',
    duration: 1000 * 60 * 30,
    activeDuration: 1000 * 60 * 5,
    secret: process.env.SESSION_SECRET
}))
    .use('/api', api_1.default);
server.listen(process.env.PORT || 3000, () => {
    db_1.default();
    console.log(`listening on port ${process.env.PORT || 3000}`);
});
