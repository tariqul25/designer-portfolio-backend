import express, { type Application, type Request, type Response } from "express"
import cors from "cors";
const app: Application = express()

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;