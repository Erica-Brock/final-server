import * as express from 'express';
import * as path from 'path';
import api from "./routers/api";
import * as bodyParser from 'body-parser';
import poolConfig from './config/db'
import * as sessions from 'client-sessions';
import { createServer } from "http";
import { Socket } from "net";
import * as socket from 'socket.io';
import { procedure } from './config/db/index';

const app = express();
const server = createServer(app);
const io = socket.listen(server);

app.use(bodyParser.json());

io.on('connection', (socket) => {

    socket.on('disconnect', function(){
    });

    socket.on('add-message', (message) => {
        procedure('spInsertMessage', [message.user_id, message.chat_id, message.message])
        .then((pack)=> {
            io.emit('message', pack[0][0]);
        });
    });
});

// I AM GOING TO IMPORT THE GETS HERE FOR THE INDEX DATABASE FOR THE INSTANT SEARCH AND ALSO FOR THE CHAT ROOM
// AS OF NOW I DO NOT HAVE TIME TO ROUTE THEM ALL OUT AND MAKE CONTROLLERS OR PROCEDURES FOR THEM ALL 

//CHATROOM FUNCTIONS

app.get("/api/chat/rooms/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    procedure("spGetChatroomsByUser", [+req.params.id] )
    .then((chatrooms: any) => {
        res.json(chatrooms[0]);
    })
})

app.get("/api/chat/messages/:id", (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    procedure("spGetMessagesByChatroom", [+req.params.id])
    .then((messages: any) => {
        res.json(messages[0]);
    })
})

app 
    //to serve dist 
    // .use(express.static(path.join(__dirname + '/../dist')))
    // .get('/*', (req: express.Request, res: express.Response) => {
    //     res.sendFile(path.join(__dirname + '/../dist/index.html'));
    // });
    .use(bodyParser.json())
    .use(sessions({
        cookieName: 'session',
        duration: 1000 * 60 * 30,
        activeDuration: 1000 * 60 * 5,
        secret: <string>process.env.SESSION_SECRET
    }))
    .use('/api', api);

server.listen(process.env.PORT || 3000, () => {
    poolConfig();
    console.log(`listening on port ${process.env.PORT || 3000}`);
});