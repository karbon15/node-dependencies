var homeless = function(pepper)	{
	var logger = require('logger');
	var pizzaMaker = require("pizzaMaker")
	
	logger.debug("Homeless guy arrived");
	var self = {};
		
	self.eat = function()	{
		console.log("Ate pepper: " + pepper.type)
		console.log("Thanks pizzaMaker", pizzaMaker);
	}
	
	return self;
};

module.exports = homeless;