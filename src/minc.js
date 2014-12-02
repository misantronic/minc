/**
 * minc.js
 * @param {Array} a An Array containing the URLs/Paths to your scripts
 * @param {Array} [b] An Array containing the URLs/Paths to you fallback-scripts
 * @returns {Function}
 * @constructor
 */
Minc = function(a, b) {
	return (function _(w) {
		var r, i, L,
			g = "readyState",
			m = [],
			M = [],
			c = w.console;

		/**
		 * Success method when all scripts are loaded
		 * @param {Function} c callback
		 */
		_.done = function(c) {
			r = c
		};

		try {
			!function l(s, d, o) {
				// AMD define()
				(w.define =
					/**
					 *
					 * @param {Function|String|Array} x Module function or moduleName or dependencies
					 * @param {Function|Array} y Module function or dependencies
					 * @param {Function|undefined} z Module function or undefined
					 */
					function(x, y, z) {
						// check multi-use of parameters
						x.call ? (z = x, x = "", y = []) : x.pop && (z = y, y = x, x = "");

						// save module
						m[i] = { i: x, d: y, m: z };

						if(L=y.length)
							for(d=L, o = []; d--;) { 		// parse dependencies
								for(g=m.length; g--;) 		// parse modules
									if(y[d] == m[g].i)
										o.push(m[g].m());

								L != o.length && 			// validate dependencies
								c && c.log("Modules missing", y)

								M[i] = z.apply(w, o);		// assign module callback
							}
						else 								// assign module callback
							M[i] = z()
					}
				).amd = 1;

				// load script
				with(document)
					(d=createElement('script')).src = s.replace(/https*:/, ""),
					d.onload = d.onreadystatechange = d.onerror = function(e) {
						(e = e || this).type == 'error' && b[i]
							? l(b[i])
							: e.type == 'load' || e[g] == 'loaded' || e[g] == 'complete' ?
							a[++i] ? l(a[i]) : r && r.apply(_, M) : 0
					},
					getElementsByTagName('head')[0].appendChild(d)
			}(a[i=0]);
		} catch(e) { c && c.log(e) }

		return _
	})(window)
};