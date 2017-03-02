#Data Structure

- seed coaches json object
{
  id: number,
  first_name: string,
  last_name: string
}

- table representation of coaches json object
coaches <=== name of table
id    first_name    last_name
1     Isaac         Brewman
2     Danny         Diaz

===============================
- seed players json object
{
  id: number,
  first_name: string,
  last_name: string,
  email: string
  phone_number: string
  mobile_provider: string
}

- table representation of players json object
players <=== name of table
id  first_name    last_name    email              phone_number    mobile_provider
1   Heriberto    Roman         joe@gmail.com      123-456-7890    Sprint                
2   Randy        Brown         joe@gmail.com      123-456-7890    Sprint
3   Big          Mac           joe@gmail.com      123-456-7890    Sprint
4   Ricardo      Roman         joe@gmail.com      123-456-7890    Sprint

===============================
- seed teams json object
{
  id: number,
  name: string,
  location: string,
  coach_id: number
}

- table representation of teams json object
teams  <=== name of table                                         
id   name         location        coach_id                        
1    Highlander   Bronx, NY       1           
2    Gem Stars    Queens, NY      2                          
3    Warriors     Brooklyn, NY    1                                            
4    Tigers       Bronx, NY       2                               

===============================
- seed team_association json object
{
  team_id: number,
  player_id: number
}

- table representation of team_association json object
team_association <=== name of table
team_id   player_id
1         4         
2         3
3         2
4         4
3         3

===============================
- seed stats_catalog json object
{
  id: number,
  description: string
}

- table representation of stats_catalog json object
stats_catalog <=== name of table
id   description
1    hits
2    atBats
3    homeRuns
4    earnedRuns
5    inningsPitched
6    strikeOuts

===============================                                                                        
- seed stats json object
{
  player_id: number,
  stats_catalog_id: number,
  how_many: number,
  game_date: timestamp
}

- table representation of stats json object
stats <=== name of table
player_id   stats_catalog_id    how_many    game_date // change this to dattime
  1         2                   5           16-06-2017 12:00:00
  1         3                   10          27-02-2017
  1         3                   8           7-03-2017
  1         5                   1           7-03-2017



NOTE:
// this is not a table but rather the computation. i.e sits in route and presented in the front end
average_category //
  battingAverage
    | hits = SELECT sum(how_many) FROM stats WHERE user_id =1 AND stats_catalog_id=1;
    | atBats = SELECT sum(how_many) FROM stats WHERE user_id =1 AND stats_catalog_id=2;
    | return battingAverage = hits/atBats;
  homeRuns
  earnedRunAverage
  strikeOuts


Query examples

#Get all the players that belongs to the team 1
SELECT * FROM Players_Teams WHERE team_id = 2
[(team_id: 2, player_id: 1),(team_id: 2, player_id: 2)]

#Get all the teams that belongs to the coach
SELECT * FROM Teams WHERE coach_id = coach.id



To-do first
Focus on creating players, coaches, and teams endpoint
and how can I get the relationship between each one.

Register as coach and player and see the relationship between them.
