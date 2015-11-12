//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
//ACCORDION EFFECT WHEN USER CLICKS ON ARROW OR IMAGE
var React = require('react');
var AddPersona = require('./addpersona');
var PersonaIndex = require('./personaindex');


var PersonaContainer = React.createClass({
	getInitialState: function() {
		return {
			open: true,
			arrowDirection: '<<'
		}
	},
	clickHandler: function(isOpen) {
		if(isOpen) {
			this.setState({
				open: false,
				arrowDirection: '>>'
			});
		} else {
			this.setState({
				open: true,
				arrowDirection: '<<'
			});
		}
	},
	render: function(){
		return(
			<div className="personaContainer">
				<AddPersona isOpen={this.state.open} clickHandlerCallback={this.clickHandler} arrowDirection={this.state.arrowDirection}/>
				<PersonaIndex isOpen={this.state.open}  personas={this.props.personas} />
			</div>
		)
	}
});

module.exports = PersonaContainer;