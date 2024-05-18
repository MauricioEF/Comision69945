import express from 'express';
import handlebars from 'express-handlebars';
import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js';

const app = express();

const PORT = process.env.PORT||8080;

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.static(`${__dirname}/public`));

app.use('/',viewsRouter);
app.use('/api/users',usersRouter);

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));