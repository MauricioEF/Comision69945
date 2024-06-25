import express from 'express';
import handlebars from 'express-handlebars';

import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();
const PORT = process.env.PORT||8080;

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.listen(PORT,()=>console.log("Listening"));

app.use('/',viewsRouter);