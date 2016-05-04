module.exports = function(grunt) {

    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
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
                    'css/style.css': 'src/scss/style.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dest/js/output.min.js': ['js/bootstrap.js', 'js/main.js']
                }
            }
        },
        clean: ['dest/**'],
        copy: {
            main: {
                expand: true,
                src: 'src/fonts/*',
                dest: 'dest/',
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
