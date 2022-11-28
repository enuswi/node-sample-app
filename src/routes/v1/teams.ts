import express, {Express, Request, Response} from 'express'
import { teamsRepository } from '../../repositories/teamsRepository'

const app: Express = express()

/**
 * TODO
 * - アーキテクチャ検討
 * - ドメインオブジェクト作成
 */
app.get('/', async (req: Request, res: Response) => {
  /**
   * TODO: DI（Controller挟む？）
   */
  const repo = new teamsRepository
  const list = repo.findAll()

  await res.json({
    count: (await list).length,
    list: (await list).concat()
  })
})

export default app