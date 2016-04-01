module.exports = function(grunt){

    //configure main project
   grunt.initConfig({

       //basic
       pkg:grunt.file.readJSON('package.json'),

       //plugin
       cssmin:{
           combine:{
               files:{
                   'public/stylesheets/main.min.css':['public/stylesheets/style.css']
               }
           }
       },
       uglify:{
           dist:{
               files:{
                   'public/javascripts/controllers/beeGameController.min.js':['public/javascripts/controllers/beeGameController.js']
               }
           }
       }
   })

    //load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Do the task
    grunt.registerTask('default',['cssmin','uglify']);
};
