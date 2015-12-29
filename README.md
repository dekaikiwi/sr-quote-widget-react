# Shuttlerock Quote Widget

A simple widget to display text entries from a Shuttlerock board.

## Installation
```
npm install
npm start // A web server will start at http://localhost:8090
```

## Example
```
<commentWidget customer="jono" board="adventures-test" interval="5000">
```

## Attributes

| Atrribute | Required? | Description |
| --------- | --------- | ----------- |
| customer  | Yes | The Shuttlerock account you want to display content from (eg <customer>.shuttlerock.com) |
| board     | Yes | The Shuttlerock board you want to display content from |
| interval  | No | The time in ms between tranisitions |
| transitionTime | No | The time between one quote disappearing and another appearing |
| sort           |  No | The order quotes will appear in valid values are `created_desc`, `shares_desc`, `comments_desc`, `random` *Note: Random is currently a fixed random order* |