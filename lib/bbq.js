var bbq = function(type)	{
	//Globally available dependency via symlink
	
	// A bit of flexibility, config will be read
	// upon initialization of the object
	// out of the scope, it would be read and only
	// expose init 
	var config = require("config");
	var logger = require("logger");
	
	var self = {};
	
	self.type = type;
	
	logger.debug("Created new barbecue sauce");
	
	if(config.lang == "EN")	{
		self.addMe = function()	{
			console.log("Added bbq sauce: " + self.type);
		}
	}
	
	if(config.lang == "FR")	{
		self.addMe = function()	{
			console.log("Ajouté sauce barbecue: " + self.type);
		}
	}
	
	return self;
}

module.exports = bbq;