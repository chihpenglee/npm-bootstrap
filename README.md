
# npm-bootstrap

npm based frontend boilerplate for Twitter Bootstrap and jQuery

Installation
------------

    npm install 

Usage
-----

	npm start

Then open browser at http://localhost:3000

### Dev Dependencies

* browserify
* copyfiles
* html-minifier
* live-server
* nodemon
* stylus
* uglify-js

### Dependencies

* bootstrap
* jquery

### directory structure
	src/
	|--	index.html
	|-- css/style.styl
	|--	js/main.js
	dist/
	|--	index.html
	|-- css/style.css
	|--	js/bundle.js
	|-- fonts/
	node_modules/
	package.json

### src/index.html

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>NPM Based Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
	<a href="#" data-toggle="tooltip" title="Hooray!">Hover over me</a>
    <script src="js/bundle.js" charset="utf-8"></script>
  </body>
</html>
```

### src/css/style.styl
``` css
@import "bootstrap/dist/css/bootstrap.min.css"

bg-color = cornsilk

body
  background bg-color
```

### src/js/main.js
``` javascript
global.jQuery = global.$ = require('jquery');

var bootstrap = require('bootstrap');

// bootstrap tooltip must be initialized by calling tootip()
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
```
