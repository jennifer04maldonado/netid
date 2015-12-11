
//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
//ACCORDION EFFECT WHEN USER CLICKS ON ARROW OR IMAGE

var PersonaIndex = require('./personaindex');

var PersonaContainer = React.createClass({
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},	

	render: function(){
		return(
			<div className="personaContainer">
				<PersonaIndex setActivePersona={this.setActivePersona} personas={this.props.personas} activePersona={this.props.activePersona}/>
			</div>
		)
	}
});

module.exports = PersonaContainer;

