//Mixins are used to extend components. Commonly created to be shared between components
var PersonaValidation = {		
    resetForm: function(){		
    	//console.log('resetting form');
    	var resetPersona = {};
    	resetPersona.name = '';
    	resetPersona.description = '';
		this.setState({persona: resetPersona});
	},
};
module.exports = PersonaValidation;
