### Minc

> A tiny cross-browser JavaScript-loader.

Minc is a lightweight JavaScript-loader (742 bytes) making it super-easy to dynamically embed your scripts.
You simply pass an array with your scripts to `Minc`. That's it.<br>
If you load your scripts via a CDN, you might optionally add another array with fallback-scripts.
 
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

Minc runs in **every browser** on **every device** (tested with all devices/browsers at [browserstack.com](http://www.browserstack.com/screenshots)).

#### AMD (Asynchronous Module Definition)

At the moment, Minc partially supports Asynchronous Module Definition using the `define()` method.<br>
[Read more about AMD](http://addyosmani.com/writing-modular-js/).