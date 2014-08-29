var pepper = function(type)	{
	// Globally available dependency via symlink
	
	// A bit of flexibility, config will be read
	// upon initialization of the object
	// out of the scope, it would be read and only
	// expose init 
	var config = require("config");
	var logger = require("logger");
	
	var self = {};
	
	self.type = type;
	
	logger.debug("Created new pepper");
	
	if(config.lang == "EN")	{
		self.addMe = function()	{
			console.log("Added pepper: " + self.type);
		}
	}
	
	if(config.lang == "FR")	{
		self.addMe = function()	{
			console.log("Ajouté un poivron: " + self.type);
		}
	}
	
	return self;
}

module.exports = pepper;