module.exports = {
	'Scripts are being loaded': function (test) {
		test
			.open('minclude.html')
			.assert.exists('#done', "It's done.")
			.done();
	}
};