import { ITeamsRepository } from './ITeamsRepository'
import { Team } from '../domain/entities/team'

class teamsRepository implements ITeamsRepository
{
  // 仮データ
  private list = [
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
    },
    {
      id: 3,
      league: 1,
      name: '横浜DeNAベイスターズ',
      rank: 2
    }
  ]

  async findAll(): Promise<Team[]> {
    let teamList = new Array<Team>

    this.list.forEach(element => {
      teamList.push(new Team(element.id, element.league, element.name, element.rank))
    });

    return teamList
  }
}

export { teamsRepository }