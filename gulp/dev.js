var gulp = require("gulp"),
	config = require("./config"),
	$ = require("gulp-load-plugins")();

gulp.task("dev:styles", function() {
	return gulp.src(config.styles.src)
		.pipe($.sourcemaps.init())
		.pipe($.plumber())
		.pipe($.sass({outputStyle: "expanded"}).on("Sass compiling error: ", $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ["> 0%"],
			cascade: false
		}))
		.pipe($.sourcemaps.write())
		.pipe($.size())
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task("dev:scripts", function() {
	return gulp.src(config.scripts.src)
		.pipe($.babel())
		.pipe($.size())
		.pipe(gulp.dest(config.scripts.dest));
});

gulp.task("dev", gulp.parallel("dev:styles", "dev:scripts"));
