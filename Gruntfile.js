
module.exports = function (grunt) {
    grunt.initConfig({
        nightwatch_report: {
            files: ['report/**/*.xml'],
            options: {
                outputDir: 'test/reports/summary'
            }
        },

        nightwatch: {
            options: {
                standalone: 'true'
            },
            src_folders: ['test/TalentScreenTest.js'],
            output_folder: 'report'
        }

    });
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-nightwatch');
    grunt.loadNpmTasks('grunt-nightwatch-report');

};