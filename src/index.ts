import express, {Express, Request, Response} from 'express'
import teams from './routes/v1/teams'

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.use('/teams', teams)

app.listen(port, () => {
  console.log(`⚡️ Server is running on port ${port}`)
})
