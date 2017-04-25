module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'css/src/main.css',
        dest: 'css/main.min.css'
      }
    },
    watch: {
      css: {
        files: ['/css/src/main.css'],
        tasks: ['postcss:dist']
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default',['postcss']);
};