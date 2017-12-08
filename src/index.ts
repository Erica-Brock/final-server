import * as express from 'express';
import * as path from 'path';
import api from "./routers/api";
import * as bodyParser from 'body-parser';
import poolConfig from './config/db'
import * as sessions from 'client-sessions';

const app = express();

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

app.listen(process.env.PORT || 3000, () => {
    poolConfig();
    console.log(`listening on port ${process.env.PORT || 3000}`);
});