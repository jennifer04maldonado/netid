
//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
//ACCORDION EFFECT WHEN USER CLICKS ON ARROW OR IMAGE

var PersonaIndex = require('./personaindex');

var PersonaContainer = React.createClass({
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},	
	setAddPersonaType: function(personaType) {
		this.props.setAddPersonaType(personaType);
	},
	render: function(){
		return(
			<div className="personaContainer">
				<PersonaIndex messagesSortedByPersonas={this.props.messagesSortedByPersonas}
							  setActivePersona={this.setActivePersona} 
							  personas={this.props.personas} 
							  activePersona={this.props.activePersona} 
							  setAddPersonaType={this.setAddPersonaType}/>
			</div>
		)
	}
});

module.exports = PersonaContainer;

