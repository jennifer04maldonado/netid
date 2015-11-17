var React = require('react');
var PersonaContainer = require('./personaContainer');

var App = React.createClass({
	render: function(){
		return (
			<div>
				<PersonaContainer personas={this.state.personas} />
			</div>
		)
		console.log('personas mounted:  ' + this.state.personas);
	}
});


module.exports = App;


