//Only used in bootsrap, no problem
var program = require('commander');

//Dependencies only read by the bootstrap
var pepper = require("./lib/pepper.js");
var pineapple = require("./lib/pineapple.js");
var bbq = require("./lib/bbq.js");

var homeless = require("./lib/homeless.js");

// Make a symlink, so that we are not bound to winston
// Instead, anything can be called logger depending 
// On the symlink
var logger = require('logger');

var pizzaMaker = require("pizzaMaker");

program
	.version('0.0.1')
	.option('-p, --peppers', 'Add peppers')
	.option('-P, --pineapple', 'Add pineapple')
	.option('-b, --bbq', 'Add bbq sauce')
	.option('-e, --env [env]', 'Set environment [DEV]', 'DEV')
		.parse(process.argv);

//First approach to dependency injection,
//make symlinks to some files in node_modules
//So they are available locally
var config = require('config').init(program.env);

config.addPeppers = program.peppers;
config.addPineapple = program.pineapple;
config.addBBQ = program.bbq;

logger.add(
	logger.transports.File,
	{ filename: config.winston.path, level: config.winston.level }
);

//What if we want the ability to make many instances of stuff and inject them?
pizzaMaker = pizzaMaker.init(new pepper("red"), new pineapple("blue"), new bbq("hot"));

pizzaMaker.showConfig();
pizzaMaker.makePizza();

new homeless(new pepper("green")).eat();











