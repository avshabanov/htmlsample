module.exports = function(grunt) {
  function prepareSkeleton() {
    grunt.file.mkdir('build/js');
    grunt.file.copy('html/index.html', 'build/index.html');
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      dist: {
        files: {
          'build/js/app.js': ['js/main.js'],
        }
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  prepareSkeleton();


  // Default task that generates development build
  grunt.registerTask('default', [
    //'concat'
  ]);

  // Release task that generates production build
  grunt.registerTask('dist', [
  ]);

  grunt.registerTask('clean', 'Recursively cleans build folder', function () {
    grunt.file.delete('build');
  });
};

