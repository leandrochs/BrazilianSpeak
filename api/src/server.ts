import cors from 'cors';
import express from 'express'

// import { Router, Request, Response } from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => res.json({ message: 'active server' }));

app.listen(+PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});

export default app;
