module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			build: {
				options: {
					config: 'config.rb'
				}
			}
		},
		uglify: {
			build: {
				files: {
					'js/scripts.js': [
						'bower_components/jquery/dist/jquery.js',

						'bower_components/foundation/js/foundation/foundation.js',

						//'bower_components/foundation/js/foundation/foundation.abide.js',
						//'bower_components/foundation/js/foundation/foundation.accordion.js',
						//'bower_components/foundation/js/foundation/foundation.alert.js',
						//'bower_components/foundation/js/foundation/foundation.clearing.js',
						//'bower_components/foundation/js/foundation/foundation.dropdown.js',
						//'bower_components/foundation/js/foundation/foundation.equalizer.js',
						//'bower_components/foundation/js/foundation/foundation.interchange.js',
						//'bower_components/foundation/js/foundation/foundation.joyride.js',
						//'bower_components/foundation/js/foundation/foundation.magellan.js',
						'bower_components/foundation/js/foundation/foundation.offcanvas.js',
						//'bower_components/foundation/js/foundation/foundation.orbit.js',
						//'bower_components/foundation/js/foundation/foundation.reveal.js',
						//'bower_components/foundation/js/foundation/foundation.slider.js',
						//'bower_components/foundation/js/foundation/foundation.tab.js',
						//'bower_components/foundation/js/foundation/foundation.tooltip.js',
						//'bower_components/foundation/js/foundation/foundation.topbar.js'
					],
					'js/modernizer.js': [
						'bower_components/modernizr/modernizr.js'
						//, 'bower_components/modernizr/feature-detects/*.js'
					]
				}
			}
		},
		appcache: {
			build: {
				dest: 'manifest.appcache',
				cache: ['css/*.css', 'js/*.js', 'images/*'],
				network: '*'
			}
		},
		exec: {
			build: {
				command: 'FOR %i in (templates/*.html) DO (IF NOT "base.html" == "%i" (python node_modules/grunt-jinja2/bin/jinja2_shell.py -t %i -b ./templates > ./%i))'
			}
		},
		watch: {
			styles: {
				files: ['scss/**/*.scss'],
				tasks: ['compass', 'appcache']
			},
			templates: {
				files: ['templates/**/*.html'],
				tasks: [/*'jinja2',*/ 'exec']
			}
		}
		//, fu****g windows :(
		//jinja2: {
		//	options: {
		//		template_path: 'templates',
		//		context_path: 'templates'
		//	},
		//	files: {
		//		'index.html': 'templates/index.html',
		//		// ...
		//	}
		//}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-appcache');
	//grunt.loadNpmTasks('grunt-jinja2');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass', 'uglify', 'appcache', /*'jinja2',*/ 'exec']);
};
