import express from 'express';
import handlebars from 'express-handlebars';

import viewsRouter from './routes/views.router.js';
import videogamesRouter from './routes/videogames.router.js';
import __dirname from './utils.js'

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',viewsRouter);
app.use('/api/videogames',videogamesRouter);

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));