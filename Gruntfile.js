'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [ 'Gruntfile.js', 'tasks/*.js' ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask( 'default', [ 'test' ] );
  grunt.registerTask( 'test', [ 'jshint' ] );
};
