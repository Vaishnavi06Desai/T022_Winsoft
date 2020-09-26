

export interface IMDBUsers {
  userid: string;
  password: string
}
export interface IMDB {
  users: IMDBUsers[];
  insession: string[];
  places: string[];

}

export class Database {
  public MilitaryDatabase: IMDB = {
    "users":
      [
        {
          userid: "MX12345678",
          password: "mil123"
        }
      ],

    "insession": [
      "idk"
    ],

    "places": [
      "Lachulung La",
      "Sia La",
      "Tanglang La",
      "Khardung La",
      "Sasser Pass",
      "Zoji La",
      "Rezang La",
      "Marsimik La",
      "Gyong La",
      "Indira Col",
      "Pensi La"
    ]
  }
}

export let database: Database = new Database();