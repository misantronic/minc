(function(w) {
	/**
	 * minc.js
	 * @param {Array} a An Array containing the URLs/Paths to your scripts
	 * @param {Array} [b] An Array containing the URLs/Paths to you fallback-scripts
	 * @returns {Function}
	 * @constructor
	 */
	function $(a, b) {
		return (function _() {
			var r, i, L, g,
				m = Minc.m,
				M = [],
				C = w.console;

			/**
			 * Success method when all scripts are loaded
			 * @param {Function} c callback
			 */
			_.done = function(c) {
				r = c
			};

			try {
				!function l(s, d, o, t, I) {
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
							m.push({ i: x, d: y, m: z });

							if(L=y.length)
								for(d=L, o = []; d--;) { 		// parse dependencies
									for(g=m.length; g--;) 		// parse modules
										if(m[g] && y[d] == m[g].i)
											o.push(m[g].m());

									L != o.length && 			// validate dependencies
									C && C.log("Missing", y)

									M[i] = z.apply(w, o);		// assign module callback
								}
							else 								// assign module callback
								M[i] = z()
						}
					).amd = 1;

					// load
					with(document)
						(d=createElement(t = s.indexOf(".css") > -1 ? 'link' : 'script'))[t == 'link' ? 'href' : 'src'] = s.replace(/https*:/, ""),
						t == 'link' ?

						// load CSS
						(I = setInterval(function(q) {
							if(d.sheet && d.sheet.cssRules && d.sheet.cssRules[0] || d[q="styleSheet"] && d[q].rules && d[q].rules[0]) {
								a[++i] ? l(a[i]) : r && r.apply(_, M);
								clearInterval(I)
							}
						}, 5)) && (d.rel = 'stylesheet')

						:

						// load JS
						d.onload = d.onreadystatechange = d.onerror = function(e) {
							(e = e || this).type == 'error' && b[i]
								? l(b[i])
								: e.type == 'load' || e[g="readyState"] == 'loaded' || e[g] == 'complete' ?
								a[++i] ? l(a[i]) : r && r.apply(_, M) : 0
						},

						getElementsByTagName('head')[0].appendChild(d)
				}(a[i=0]);
			} catch(e) { C && C.log(e) }

			return _
		})()
	};

	$.m = [];

	w.define && define.amd
		?
			define('Minc', function() {
				return $
			})
		:
			w['Minc'] = $

})(window);