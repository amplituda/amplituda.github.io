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
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['sass', 'cssmin', 'htmlmin']);

};
