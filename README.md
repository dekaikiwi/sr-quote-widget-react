# Shuttlerock Quote Widget

A simple widget to display text entries from a Shuttlerock board.

## Installation
```
npm install
npm start
```

## Example
```
<commentWidget customer="jono" board="adventures-test" interval="5000"> 
```

| Atrribute | Required? | Description |
| --------- | --------- | ----------- |
| customer  | Yes |The Shuttlerock account you want to display content from (eg <customer>.shuttlerock.com) |
| board     | Yes |The Shuttlerock board you want to display content from |
| interval  | Yes |The time in ms between tranisitions |
