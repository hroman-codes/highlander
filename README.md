![Highlander](/public/assets/img/highlander_logo.png)
[![Build Status](https://travis-ci.org/iamromanh/highlander.svg?branch=master)](https://travis-ci.org/iamromanh/highlander)

Link: https://highlandersport.herokuapp.com/index.html

## Description

A simple app for coaches to manage their teams stats, averages, trash talk conversations, and poach players from other teams.

Current MVP version omits :no_entry_sign:: </br>
Poaching power :punch: </br>
Player averages :bar_chart: </br>
Trash talk <iframe src="https://giphy.com/embed/26ufiJHeVVO0NemgE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/southparkgifs-26ufiJHeVVO0NemgE"></a></p></br>

Want to keep up with the development and roadmap of Highlander?  https://trello.com/b/p1gqbNtQ/thinkful-capstone-highlander

## Screenshots
![main page](/public/assets/img/highlander_logo.pn)

### Main Page

![main page](/public/assets/img/highlander_logo.pn)

### User List

![user list](/client/assets/userList.png)

### New List

![new list](/client/assets/newList.png)

### Search to Add Items

![search](/client/assets/addItems.png)

## Tech Stack

- DB: cloud-hosted PostgreSQL instance

- Server: Node, Express, Knex

- Client: React, Redux, Thunk

## Component Locations


# Database Structure

## Tables
#### `shows`
 id  | title | path, etc.
:---:|:------|:----------:
123 | _Star Wars_ | `/123456.jpg`
124 | _Empire Strikes Back_ | `/123457.jpg`

#### `list_items`
listID | movieId | watched
:-----:| :-----: | :---:
1  | 123 | true
1  | 124 | true
2  | 123 | false

#### `lists`
ListID | ListName
-----|:-----:
1 | Cartoons
2 | Sci-Fi

---

## Endpoints:

- [x] app.get('/lists')
  - returns a list of names and their ids

- [x] app.get('/lists/:listId')
  - returns a list of movies on specified list

- [x] app.post('/lists/:name')
  - creates a new list
  - response: `{ listId: 12345, name: "Star Wars Collection" }`

- [x] app.post('lists/:listId/show')
  - body: movie / season / episode
  - add to movies table only if not already in it
  - in all cases, add movie.id / listId to ListContent table

- [x] app.post('lists/:listname')
  - create new list
  - res: {id, name}

- [x] app.post('episodes/:listId/:showId/:seasonId')

- [x] app.delete('/lists/:listId')
  - deletes the whole list
  - first delete matching `list_content` rows
  - then delete list from `lists`

- [x] app.delete('lists/:listId/:id')
  - deletes item off of list and its children off the list
  - (get the ids of all items that need to be deleted,
  - THEN delete from listTable)

- [x] app.put('/lists/:listId')
  - res: {name: listname}
  - change list name, return {listid: id, name: listname}

- [x] app.put('/lists/:listId')
  - body: {watched: true/false}
  - change whether show is marked as watched
