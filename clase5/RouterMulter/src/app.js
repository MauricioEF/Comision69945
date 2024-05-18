import express from 'express';
import productsRouter from './routes/products.router.js';
import petsRouter from './routes/pets.router.js';
import customMiddleware from './middlewares/customMiddleware.js';

const app = express();

const PORT = process.env.PORT||8080;

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));

app.use(express.json());

app.use(express.static('./src/public'))

//app.use(customMiddleware);

app.use('/api/products',productsRouter);
app.use('/api/pets',petsRouter);