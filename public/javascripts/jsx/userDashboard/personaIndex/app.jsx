var React = require('react');
var AddPersona = require('./addpersona');
var PersonaIndex = require('./personaindex');

let App = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            personaId: null

        }
	},
	grabPersonas: function(){
		$.get('.././json_files/personaSchema.json', function(result) {
	     	var personaArray = result;
		     if (this.isMounted()) {
		       this.setState({
		         personas: personaArray
		       });
		    }
	   	}.bind(this));
	},
	componentDidMount: function() {
		this.grabPersonas();   
  	},
	render: function(){
		
		return (
			<div>
				<AddPersona />
				<PersonaIndex personas={this.state.personas}/>
			</div>
		)
		console.log(this.props.personas);
	}
});
ReactDOM.render(
	<App />, 
	document.getElementById('personaIndex')
);