var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	console.log("My app is running!");

	app.get("/hello", function (req, resp) {
		resp.write("HELLO WORLD! My name is Lucas");
		resp.end();
	});
	app.get("/html", function (req, resp) {
		resp.write("<html><body><h1>WOO html!</h1></body></html>");
		resp.end();
	});

	// app.get("/template/:name/:food/", function (req, resp) {
	// 	resp.render("template", { name: req.params.name, food: req.params.food });

	app.get("/", function (req, resp) {
		resp.render("index", { });
	});
})