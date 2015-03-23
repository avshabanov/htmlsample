module.exports = function(grunt) {

  var sources = [
    'node_modules/react/dist/react.js',
    'build/tmp/app-react-widgets.js',
    'js/router.js'
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    react: {
      combined_file_output: {
        files: {
          'build/tmp/app-react-widgets.js': [
            'js/react/hello.jsx',
            'js/react/footer.jsx'
          ]
        }
      }
    },

    // (development only)
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ''
      },
      dist: {
        src: sources,
        dest: 'build/js/app.js'
      }
    },

    // (production version)
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: sources,
        dest: 'build/js/app.min.js'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat'); // TODO: replace with browserify (?)
  grunt.loadNpmTasks('grunt-react');

  // Skeleton preparation task - see also http://gruntjs.com/api/grunt.file
  grunt.file.mkdir('build');
  grunt.file.mkdir('build/tmp'); //< temporary dir for intermediate files
  grunt.file.mkdir('build/js');

  grunt.file.copy('html/_index.html', 'build/index.html');

  // Default tasks
  grunt.registerTask('default', [
    'react',
    'concat'
    // TODO: enable uglify in prod profile
    //'uglify'
  ]);
};

