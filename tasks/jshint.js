// tasks/jshint.js
module.exports = function(grunt) {
  grunt.config('jshint', {
    app: {
      options: {jshintrc: 'app/.jshintrc'},
      src: ['app/**/*.js'],
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};