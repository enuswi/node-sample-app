class Team {

  private _id: number
  private _league: number
  private _name: string
  private _rank: number

  constructor(
    id: number,
    league: number,
    name: string,
    rank: number
  ) {
    this._id = id
    this._league = league
    this._name = name
    this._rank = rank
  }
}

export { Team }