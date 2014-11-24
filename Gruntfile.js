module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: false
			},

			projects: {
				files: {
					'minc.min.js'	: ['minc.js']
				}
			}
		},

		dalek: {
			options: {
				"browser": ["phantomjs"],
				"browsers": [{
					"chrome": {
						"port": 5555
					}
				}]
			},
			dist: {
				src: ['test/tests.js']
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-dalek');

	// tasks
	grunt.registerTask('test', ['dalek']);
	grunt.registerTask('default', ['dalek', 'uglify']);
};