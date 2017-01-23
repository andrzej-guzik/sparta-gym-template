var config = {
	src: "./src",
	build: {
		dest: "./docs",
		styles: "./docs/css",
		scripts: "./docs/js",
		images: "./docs/assets/images"
	},
	styles: {
		src: "./src/scss/styles.scss",
		dest: "./src/temp/css",
		srcDir: "./src/scss/**/*.scss",
	},
	scripts: {
		src: "./src/js/scripts.js",
		dest: "./src/temp/js",
		srcDir: "./src/js/**/*.js",
	},
	images: {
		src: "./src/assets/images/**/*"
	},
	server: {
		notify: false,
		server: {
			baseDir: "src"
		},
		files:[
			"./src/css/**/*.css",
			"./src/index.html"
		]
	}
};

module.exports = config;
