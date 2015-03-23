module.exports = function(grunt) {

  var sources = [
    'js/module.js', 'js/domain-object.js', 'js/view.js'
  ];

  var target = 'build';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'js/react',
            src: ['**/*.jsx'],
            dest: 'build/js',
            ext: '.js'
          }
        ]
      }
    },

    // (production version)
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: sources,
        dest: target + '/<%= pkg.name %>.min.js'
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
        dest: target + '/<%= pkg.name %>.js'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat'); // TODO: replace with browserify (?)
  grunt.loadNpmTasks('grunt-react');

  // Skeleton preparation task - see also http://gruntjs.com/api/grunt.file
  grunt.file.mkdir('build');
  grunt.file.mkdir('build/js');
  grunt.file.copy('html/_index.html', 'build/index.html');

  // TODO: move reactjs copy to the concat file task
  grunt.file.copy('js/router.js', 'build/js/router.js');
  grunt.file.copy('node_modules/react/dist/react.js', 'build/js/react.js');

  // Default tasks
  grunt.registerTask('default', [
    'react'
    // TODO: enable uglify
    // TODO: enable concat
    //'uglify', 'concat'
  ]);
};

