
module.exports = function(grunt) {
  'use strict';
    //require('load-grunt-tasks')(grunt);  //read package.json for grunt task plugins

    //Grunt looks here for an Object with the same name of the task
    var rewrite = require('connect-modrewrite');
    var history = require('connect-history-api-fallback');
    var urlRewrite = require('grunt-connect-rewrite');
    var proxy = require('grunt-connect-proxy/lib/utils'); 

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        files: {
          vendor_js: [
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/jquery-ui/jquery-ui.min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'bower_components/chosen/chosen.jquery.min.js',
              'bower_components/lodash/dist/lodash.min.js',
              'bower_components/angular/angular.js',
              'bower_components/angular-ui-router/release/angular-ui-router.min.js',
              'bower_components/angular-translate/angular-translate.min.js',
              'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
              'bower_components/angular-cookies/angular-cookies.min.js',
              'bower_components/ngstorage/ngStorage.min.js',
              'bower_components/angular-resource/angular-resource.min.js',
              'bower_components/angular-animate/angular-animate.min.js',
              'bower_components/angular-bootstrap/ui-bootstrap.min.js',
              'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
              'bower_components/bootstrap-material-design/dist/js/material.min.js',
              'bower_components/angular-message-center/dist/js/message-center.min.js',
              'bower_components/api-check/api-check.min.js',
              'bower_components/angular-chosen-localytics/chosen.js',
              'bower_components/chosen/chosen.jquery.min.js',
              'bower_components/chosen/chosen.proto.min.js'
          ] ,
            vendor_css: [
                'bower_components/bootstrap/dist/css/bootstrap.min.css',
                'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                'bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min',
                'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
                'bower_components/font-awesome/css/font-awesome.min.css',
                'bower_components/angular-message-center/dist/css/message-center.min.css',
                'bower_components/angular-chosen-localytics/chosen-spinner.css',
                'MegaNavbar/assets/css/MegaNavbar.min.css',
                'MegaNavbar/assets/css/animation/*.css',
                'MegaNavbar/assets/css/skins/*.css',
                'bower_components/chosen/chosen.min.css'
            ],
            vendor_assets: [
                'MegaNavbar/assets/plugins/simple-line-icons/**',
                'bower_components/angular-chosen-localytics/spinner.gif',
                'bower_components/bootstrap/dist/fonts/**',
                'bower_components/chosen/**.png',
                'bower_components/font-awesome/fonts/**'
                
            ],
        },
     
        //Find JavaScript Problems
        jshint: {
            files: {
                src: ['src/**/*.js']
            }
        },
        
        //Concatenate files
        concat:{
            options: {
                banner: '// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +                          '// http://www.spring-2885.org\n'
            },
            dev_js: {
                src:[ '<%= files.vendor_js %>',
                     'src/js/app.js', 
                     'src/js/config.js',
                     'src/js/routes.js',
                     'src/js/controllers/**/*.js',
                     'src/js/directives/**/*.js',
                     'src/**/*.js'],
                dest: 'generated/app.min.js',
            },
            dev_css: {
                src: ['<%= files.vendor_css %>', 'src/assets/css/**/*.css'],
                dest: 'generated/styles.min.css'
            },
            
        },
        
        //Minify JS files
        uglify: {
            options: {
                banner: '// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +                          '// http://www.spring-2885.org\n'
            },
            build: {
                src: 'generated/app.min.js',
                dest: 'dist/app.min.js'
            }
        },
        
        //Minify CSS
        cssmin: {
            options: {
                banner: '// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +                          '// http://www.spring-2885.org\n'
            },
            build: {
                src: 'generated/styles.min.css',
                dest: 'dist/styles.min.css'
            }
        },
        
        //Copy Files
        copy: {
            html: {
                files: {
                    'generated/index.html' : 'src/index.html',
                    'dist/index.html' : 'src/index.html',
                    'generated/' : ['src/views/**','src/templates/**', '!*.js', 'src/assets/**', 'backend/**', 'src/assets/languages/**', 'src/assets/images/**'],
                    'dist/' : ['src/views/**','src/templates/**', '!*.js'] 
                }
            },
            
            dev_assets: {

                fonts: [{
                    
//                    cwd:'bower_components/bootstrap/dist/fonts/',
//                    src: '**/*',
//                    dest: 'generated/fonts',
////                    expand: true,
//                    flatten: true,
//                    filter: 'isFile'
                    expand: true,
                    cwd:'bower_components/bootstrap/dist/fonts',
                    src:['**'],
                    dest: 'generated/fonts/'
                    
                    
//                    'generated/': 'bower_components/font-awesome/fonts/**',
//                    'dist/': 'bower_components/font-awesome/fonts/**',
//                    'generated/': 'bower_components/bootstrap/dist/fonts/**',
//                    'dist/': 'bower_components/bootstrap/dist/fonts/**'
//                    'generated/assets': 'MegaNavbar/assets/plugins/simple-line-icons/**',
//                    'dist/assets': 'MegaNavbar/assets/plugins/simple-line-icons/**',
//                    'generated/assets': 'bower_components/angular-chosen-localytics/spinner.gif',
//                    'dist/': 'bower_components/angular-chosen-localytics/spinner.gif',
//                    'generated/assets': 'bower_components/chosen/**.png',
//                    'dist/': 'bower_components/chosen/**.png'
                }]
            }
            
        },
        
        //Clean Generated Files
        clean: {
            workspaces: ['dist', 'generated']
        },
        
        //Static File Server
        connect: {  
            options: {
               port: 8000,
               hostname: 'localhost',
           },
	    proxies: [
	      {
	        context : '/user',
		host: 'localhost',
		port: 8888,
		https: false,
 	        changeOrigin: true,
	      },
	    ],
            test: {
                port: 8001,
		hostname: 'localhost',
                base: {
                        path: 'generated/',
                        options: {
                           index: 'index.html' //need rewrite rule for angular
                        }
                },
                middleware: function(connect, options) {
                    return [
                      // redirect all urls to index.html in build folder
                      urlRewrite('build', 'index.html'),

                      // Serve static files.
                      connect.static(options.base),

                      // Make empty directories browsable.
                      connect.directory(options.base)
                    ];
                }
            },
            dev: {
                options: {
                    port: 8001,
                    base: {
                        path: 'generated/',
                        options: {
                           index: 'index.html'
                        }
                    },
			middleware: function(connect, options, defaultMiddleware) {
				defaultMiddleware.unshift(history())
				defaultMiddleware.unshift(proxy.proxyRequest);
				return defaultMiddleware
				},
		},
            },
            build: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: {
                        path: 'dist',
                        options: {
                            index: 'index.html'
                        }
                    },
                    open: 'http://localhost:9001',
                    keepalive: true
                    
                }
            }
        },
        
        //Open Project in default Web Browser
        open: {
            dev: {
                path: 'http://localhost:<%= connect.dev.options.port %>'
            },
            build: {
                path: 'http://localhost:<%= connect.build.options.port %>'
            }
        },
        
        //Watch Files for changes
        watch: {
            files: ['src/**/*.js','src/**/*.css', 'src/**/*.html'],
            tasks: ['concat', 'copy']
        }
        
    });
  
    //grunt.loadTasks('tasks');
    
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    
  grunt.registerTask('default', ['jshint', 'concat', 'copy', 'configureProxies:dev', 'connect:dev', 'open:dev', 'watch']);
    grunt.registerTask('prodsim', ['build', 'connect:build', 'open:build']);
    grunt.registerTask('build', ['clean', 'cssmin:build', 'uglify:build', 'copy']);
    
    
    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });
    
}
