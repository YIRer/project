module.exports = function(grunt){
  //
  // grunt.registerTask('speak',function(){console.log('I`m Speaking');})
  //   grunt.registerTask('yell',function(){console.log('I`m yelling');})
  // grunt.registerTask('default',['speak','yell'])
  grunt.initConfig({
     concat: {
    //  options: {
    //    separator: ';',
    //    },
       css: {
         src: ['libs/css/*.css'],
         dest: 'dist/style.css',
       },
       js: {
         src: ['libs/js/*.js'],
         dest: 'dist/js/script.css',
       },
   },

   watch: {
      css: {
      files: ['libs/css/*.css'],
      tasks: ['concat'],

    },

    js: {
    files: ['libs/js/*.js'],
    tasks: ['concat'],

  },
  less: {
  files: ['libs/less/*.less'],
  tasks: ['less'],

},
},

less:{
       development:{
           options:{
               paths:["libs/less"],

           },

           files: {
               'libs/css/less.css':'libs/less/*.less'
           },

       },

   },


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');


}
