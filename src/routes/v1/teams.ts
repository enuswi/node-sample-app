import express, {Express, Request, Response} from 'express'

const app: Express = express()

app.get('/', async (req: Request, res: Response) => {
  /**
   * TODO
   * - アーキテクチャ検討
   * - ドメインオブジェクト作成
   */
  res.json({
    list: [
      {
        id: 1,
        league: 1,
        name: '東京ヤクルトスワローズ',
        rank: 1
      },
      {
        id: 2,
        league: 2,
        name: 'オリックスバファローズ',
        rank: 1
      }
    ]
  })
})

export default app