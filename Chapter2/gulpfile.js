const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
 
gulp.task('default', () =>

    gulp.src('es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist')),


    gulp.src(['es6/**/*.js'])
     .pipe(eslint())
     .pipe(eslint.format())        
);