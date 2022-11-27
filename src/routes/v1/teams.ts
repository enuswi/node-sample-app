import express, {Express, Request, Response} from 'express'

const app: Express = express()

app.get('/', function (req: Request, res: Response) {
  res.json({
    list: [
      {
        name: '東京ヤクルトスワローズ'
      },
      {
        name: 'オリックスバファローズ'
      }
    ]
  })
})

export default app