### minc.js

> A tiny cross-browser css, javascript- and module-loader.

minc.js is a lightweight script- and module-loader (771 bytes, minified and gzipped) making it super-easy to dynamically embed your css-file, javascripts and/or initialize custom modules.
You simply pass an array with your files to `Minc`. That's it.<br>
If you load your scripts via a CDN, you might optionally add another array with fallback-scripts.<br>
 
#### How it's done
 
```javascript
Minc(
	[										// load a bunch of files
		'//code.jquery.com/jquery-2.1.0.js',
		'//mycdn.com/my-cool-lib.min.js',
		'//mycdn.com/my-cool-css.min.css'
	],
	[										// optional: set up alternatives, if the CDN is down...
		'lib/jquery-2.1.0.js',
		'src/myCoolApp.min.js',
		'src/my-cool-css.min.css'
	]
).done(function($, myApp) {					// callback, when scripts are being loaded
	// entry point
	$('body').addClass('success');
	myApp.init();
});
```

#### Cross-browser

minc.js runs in **every browser** on **every device** (tested with all devices/browsers at [browserstack.com](http://www.browserstack.com/screenshots)).

#### AMD (Asynchronous Module Definition)

minc.js follows the basic AMD-concept, thus you might use your own modules.<br>
[See an example-module](https://github.com/misantronic/minc/blob/master/examples/lib/test-lib.js) and [read more about AMD](http://addyosmani.com/writing-modular-js/).