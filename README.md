# Shuttlerock Quote Widget

A simple widget to display text entries from a Shuttlerock board. Built in ReactJS


## How to: Run Local Web Server
```
npm install
npm start // A web server will start at http://localhost:8080
```

## How to: Build

```
npm install
npm run deploy
```

`sr-quote-widget.js` will be compiled (CSS Included) to the `/dist` directory.

## Example
```
<html>
  <head>
    <!-- If you have your own version of jQuery is may not be neccesary to include this version -->
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  </head>
  <body>
      <h1>Widget 1</h1>
      <div class="quoteWidget default-theme" customer="news" board="out-and-about" interval="5000"></div>
      <h1>Widget 2</h1>
      <div class="quoteWidget default-theme" customer="jono" board="star-wars-text" interval="1000"></div>
      
      <!-- Script must be placed after point in HTML where the widget will appear -->
      <script src="path-to-script/sr-quote-widget.js"></script>
  </body>
</html>
```

## Attributes

| Atrribute | Required? | Description |
| --------- | --------- | ----------- |
| customer  | Yes | The Shuttlerock account you want to display content from (eg <customer>.shuttlerock.com) |
| board     | Yes | The Shuttlerock board you want to display content from |
| interval  | No | The time in ms between tranisitions |
| transitionTime | No | The time between one quote disappearing and another appearing |
| sort           |  No | The order quotes will appear in valid values are `created_desc`, `shares_desc`, `comments_desc`, `random` *Note: Random is currently a fixed random order* |

## Themes
These exist multiple themes that can be applied to the widget. When embedding the the widget HTML block into your page, please specify one of the following themes as a class.

- `default-theme`
- `new-theme`

_TODO: Set Default as default theme even if default theme is not specified by user in HTML class_

## Compatibility

This widget relies on jQuery for parts of it's functionality. It was built using jQuery 2.1.4 and has not been tested for compatibility with other versions at this stage.

[![Code Climate](https://codeclimate.com/github/dekaikiwi/sr-quote-widget-react/badges/gpa.svg)](https://codeclimate.com/github/dekaikiwi/sr-quote-widget-react)
