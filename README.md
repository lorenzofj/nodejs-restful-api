# MINECRAFT RESTFUL API

Restful API I built with Node.js, Express and MongoDB.

### In the project directory you can run:

`npm install`

To install all the dependencies.

`npm start`

Runs the app in development mode.  
Open http://localhost:8080 to view it in the browser.

Lastly create a .env file in the project directory and paste this code:

```
DB_CONNECTION=mongodb+srv://awesome-guest:Guest-restapi@rest-api-db.2pxdn.mongodb.net/rest-api-db?retryWrites=true&w=majority
```

## API Reference

#### Get all Mobs

```http
  GET /mobs
```

#### Get specific Mob

| Parameter      | Type     | Description                                        |
| :------------- | :------- | :------------------------------------------------- |
| `name`         | `string` |**Optional**. Name of the mob.                      |
| `healthPoints` | `number` |**Optional**. Health points of the mob.             |
| `behavior`     | `string` |**Optional**. Pasive, Neutral, Hostile.             |
| `spawn`        | `array`  |**Optional**. Biome or world where it spawns.       |
| `usableItems`  | `array`  |**Optional**. Items the player can use with the mob.|
| `appearance`   | `string` |**Optional**. How the mob looks like in the game.   |

#### Example query

```http
  http://localhost:8080/mobs/spawn=Overworld
```

## Items

#### Get all Items

```http
  GET /items
```

#### Get specific Item

| Parameter      | Type     | Description                                                  |
| :------------- | :------- | :------------------------------------------------------------|
| `name`         | `string` |**Optional**. Name of the item.                               |
| `rarity`       | `string` |**Optional**. Common, Uncommon, Rare, Epic.                   |
| `renewable`    | `array`  |**Optional**. Yes, No.                                        |
| `durability`   | `array`  |**Optional**. Golden, Wooden, Stone, Iron, Diamond, Netherite.|

#### Example query

```http
  http://localhost:8080/items/rarity=Commmon
```
