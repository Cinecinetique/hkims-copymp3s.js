module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('tasks');
};