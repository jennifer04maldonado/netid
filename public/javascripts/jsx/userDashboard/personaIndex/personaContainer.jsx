
//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
//ACCORDION EFFECT WHEN USER CLICKS ON ARROW OR IMAGE

var AddPersona = require('./addpersona');
var PersonaIndex = require('./personaindex');

var PersonaContainer = React.createClass({
	getInitialState: function() {
		return {
			open: true
		}
	},
	clickCollapseHandler: function() {
		if(this.state.open) {
			this.setState({
				open: false
			});
		} else {
			this.setState({
				open: true
			});
		}
	},
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},	

	render: function(){
		return(
			<div className="personaContainer">
				<AddPersona isOpen={this.state.open} />
				<PersonaIndex isOpen={this.state.open} setActivePersona={this.setActivePersona} collapsePersona={this.clickCollapseHandler} personas={this.props.personas} activePersona={this.props.activePersona}/>
			</div>
		)
	}
});

module.exports = PersonaContainer;

