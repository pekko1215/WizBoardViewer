const gulp = require('gulp'),
    riot = require('gulp-riot'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    riotify = require('riotify');

// gulp.task('riot', () => {
//     gulp
//         .src('src/tags/*.tag')
//         .pipe(riot())
//         .pipe(gulp.dest('./tags'));
// });

gulp.task('browserify', () => {
    return browserify('./src/main.js')
        .transform(babelify, {
            presets: [['@babel/preset-env',{
                targets:{
                    node:'current'
                }
            }]]
        })
        .transform(riotify)
        .bundle()
        .on('error', function(err){
            console.log(`Error : ${err}`);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('watch',gulp.series('browserify',()=>{
    gulp.watch('./src/tags/*.riot', gulp.task('browserify'));
    gulp.watch('./src/*.js', gulp.task('browserify'));
}));

