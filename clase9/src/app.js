import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import studentsRouter from './routes/students.router.js';
import coursesRouter from './routes/course.router.js'
import ordersRouter from './routes/orders.router.js'

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('MONGO URL')

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.listen(PORT,()=>console.log("Listening"));

app.use('/',viewsRouter);
app.use('/api/users',usersRouter);
app.use('/api/courses',coursesRouter);
app.use('/api/students',studentsRouter);
app.use('/api/orders',ordersRouter);