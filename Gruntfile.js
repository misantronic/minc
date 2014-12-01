module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: {
					except: ['Minc']
				}
			},

			projects: {
				files: {
					'src/minc.min.js'	: ['src/minc.js']
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// tasks
	grunt.registerTask('default', ['uglify']);
};