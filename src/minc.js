/**
 *
 * @param {Array} a An Array containing the URLs/Paths to your scripts
 * @param {Array} [b] An Array containing the URLs/Paths to you fallback-scripts
 * @param [i] placeholder
 * @returns {Function}
 * @constructor
 */
Minc = function(a, b, i) {
	return (function _(r, m, M) {
		m = [];
		M = [];

		/**
		 * Success method when all scripts are loaded
		 * @param {Function} c callback
		 */
		_.done = function(c) {
			r = c
		};

		/**
		 *
		 * @param {String} c
		 * @param [d] placeholder
		 * @param [g] placeholder
		 * @param [h] placeholder
		 */
		!function l(c, d, g, h) {
			// AMD define()
			(define =
				/**
				 *
				 * @param {String|Array} x moduleName or dependencies
				 * @param {Function|Array} y Module function or dependencies
				 * @param {Function|undefined} z Module function or undefined
				 */
				function(x, y, z) {
				// check multi-use of parameters
				if(x.map) {
					z = y;
					y = x;
					x = "";
				}

				// save module
				m[i] = { i: x, d: y, m: z };

				if(0 in y) {
					// parse dependencies
					for(d=y.length, h = []; d--;) {
						// parse modules
						for(g=m.length; g--;)
							if(y[d] == m[g].i)
								h.push(m[g].m());
						// assign module callback
						M[i] = z.apply(window, h);
					}
				} else {
					// assign module callback
					M[i] = z()
				}
			}).amd = 1;

			with(document)
				(d=createElement('script')).src = c.replace(/https*:/, ""),
				getElementsByTagName('head')[0].appendChild(d),
				d.onload = d[h="onreadystatechange"] = d.onerror = function(e) {
					e = e || this;
					e.type == 'error' && b[i]
						? l(b[i])
						: e.type == 'load' || e[g="readyState"] == 'loaded' || e[g] == 'complete' ?
						d[h]=null || a[++i] ? l(a[i]) : r && r.apply(_, M) : 0
				}
		}(a[i=0]);

		return _
	})()
};