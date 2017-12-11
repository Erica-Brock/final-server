import * as express from 'express';
import * as path from 'path';
import api from "./routers/api";
import * as bodyParser from 'body-parser';
import poolConfig from './config/db'
import * as sessions from 'client-sessions';
import * as algoliasearch from "algoliasearch";
import { createServer } from "http";
import { Socket } from "net";
import * as socket from 'socket.io';
import { procedure } from './config/db/index';


export const client = algoliasearch("NGFATQMT4B", "3c9872f8338b96966a9dab158cc77e70");

// CHANGE INDEX TO "FinalJobs" WHEN USING THESE FUNCTIONS FOR JOBS AND TO "FinalUsers" FOR USERS

const index = client.initIndex('FinalUsers');

const app = express();
const server = createServer(app);
const io = socket.listen(server);

app.use(bodyParser.json());

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        console.log(message)
        procedure('spInsertMessage', [message.user_id, message.chat_id, message.message])
        .then((pack)=> {
            console.log("Inside whatever", pack)
            io.emit('message', pack[0][0])
            socket.broadcast.emit('message', pack[0][0])
        })
    })
})



// I AM GOING TO IMPORT THE GETS HERE FOR THE INDEX DATABASE FOR THE INSTANT SEARCH AND ALSO FOR THE CHAT ROOM
// AS OF NOW I DO NOT HAVE TIME TO ROUTE THEM ALL OUT AND MAKE CONTROLLERS OR PROCEDURES FOR THEM ALL 

//CHATROOM FUNCTIONS

app.get("/api/chat/rooms/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    procedure("spGetChatroomsByUser", [+req.params.id] )
    .then((chatrooms: any) => {
        res.json(chatrooms[0])
        console.log(chatrooms[0])
    })
})

app.get("/api/chat/messages/:id", (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    procedure("spGetMessagesByChatroom", [+req.params.id])
    .then((messages: any) => {
        res.json(messages[0])
        console.log(messages[0])
    })
})

//USE THIS FUNCTION INCASE YOU NEED TO CLEAR THE INDEX AND RE PUSH ALL OF THE USERS OR JOBS
//YOU WILL HAVE TO CHANGE THE INDEX NAME TO 'FinalJobs' OR 'FinalUsers' DEPENDING ON WHICH ONE YOU ARE PUSHING 
//AND AS OF NOW I HAVE THOSE IN THE COROSPONDING CONTROLLING FOLDERS

// app.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     index.addObject(req.body, (err, content) => {
//         console.log(content)
//         procedure("spInsertUser", [req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img, content.objectID])
//         .then((id: any) => {
//             console.log(id[0][0].id)

//             index.partialUpdateObject({
//                 id: id[0][0].id,
//                 objectID: content.objectID
//             })
//         })
//     })   
// })

//UNTOUCHED SERVER BELOW

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