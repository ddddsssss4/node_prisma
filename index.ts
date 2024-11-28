import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const prisma = new PrismaClient()

// use `prisma` in your application to read and write data in your DB

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});
app.post('/users', async (req: Request, res: Response) => {
  const user = await prisma.aryan.create({
    data: req.body,
  })
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
