### minc.js

> A tiny cross-browser script- and module-loader.

minc.js is a lightweight script- and module-loader (748 bytes) making it super-easy to dynamically embed your scripts and/or initialize custom modules.
You simply pass an array with your scripts to `Minc`. That's it.<br>
If you load your scripts via a CDN, you might optionally add another array with fallback-scripts.<br>
 
#### How it's done
 
```javascript
Minc(
	[										// load a bunch of scripts
		'//code.jquery.com/jquery-2.1.0.js',
		'//mycdn.com/my-cool-lib.min.js'
	],
	[										// optional: set up alternatives, if the CDN is down...
		'lib/jquery-2.1.0.js',
		'src/myCoolApp.min.js'
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

minc.js follows the AMD `require`/`define`-concept, thus you might use your own modules.<br>
[Read more about AMD](http://addyosmani.com/writing-modular-js/).