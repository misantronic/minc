### Minc

> A tiny JavaScript-loader for most browsers.

Minc is a lightweight JavaScript-loader (283 bytes) making it super-easy to dynamically embed your scripts.
You simply pass an array with your scripts to `Minc`. That's it.<br>
If you load your scripts via a CDN, you might optionally add another array with fallback-scripts.
 
#### See how it's done
 
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
).done(function() {							// callback, when scripts are being loaded
	// entry point
	myCoolApp.init();
});
```

#### Cross-browser

Minc is based on the [Promises](http://caniuse.com/#feat=promises)-structure which only works in modern browsers.<br>
However, you can use Minc if your browser won't support Promises.