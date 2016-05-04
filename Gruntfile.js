module.exports = function (grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dest/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dest/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          'index.html': 'src/index.html'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dest/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/js/output.min.js': ['src/js/bootstrap.js', 'src/js/main.js']
        }
      }
    },
    clean: ['dest/**'],
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'fonts/*',
          dest: 'dest/'
        }, {
          expand: true,
          cwd: 'src',
          src: 'img/*',
          dest: 'dest/'
        }]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'htmlmin', 'uglify', 'copy']);

};