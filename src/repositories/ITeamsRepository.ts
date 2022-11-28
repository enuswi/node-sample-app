import { Team } from '../domain/entities/team'

interface ITeamsRepository {
  findAll(): Promise<Team[]>
}

export { ITeamsRepository }