var gulp = require('gulp'),
Postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('Postcss-simple-vars'),
nested=require('Postcss-nested'),
cssImport=require('Postcss-import'),
mixins=require('postcss-mixins')

;




gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(Postcss([cssImport,mixins,cssvars, nested, autoprefixer]))
             .on('error',function (errorInfo) {
                 console.log(errorInfo.toString());
                 this.emit('end');

             })
             .pipe(gulp.dest('./app/temp/styles'));
});
