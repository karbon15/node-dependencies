//Define all configs for all environments
var config = {
	envs : {
		DEV : {
			winston : {
				path : "/var/log/dependencies/output.log",
				level : "silly"
			},
			lang : "FR"
		},
		UAT : {
			winston : {
				path : "/var/log/dependencies/output.log",
				level : "warning"
			},
			lang : "EN"
		}
	}	
}

// Need to require once, initialize it,
// and then it is set for any future requirer.
module.exports = {
	init : function(env)	{
		config.envs[env].env = env;
		module.exports = config.envs[env];
		return config.envs[env];
	}
}