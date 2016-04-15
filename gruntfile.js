module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    // connect: {
    //   server: {
    //     options: {
    //       port: 3000,
    //       hostname: '*',
    //       keepalive: true
    //     }
    //   }
    // },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: '.'
        }
      }
    },
    sass: {   
      options: {
        sourceMap: true
      },                           // Task
      dist: { 
        files: {                         // Dictionary of files
          'main.css': 'sass/main.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      sass:{
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }    
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['browserSync', 'watch']);

};