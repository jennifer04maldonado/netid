//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX
var React = require('react');
var SinglePersonaHeader = require('./singlepersonaheader');

var PersonaIndex = React.createClass({
	render: function(){
		if(this.props.personas.length !== 0){
			console.log('rendering personas');
			return (
		        <div className="col-sm-12 panel-group multiPersonaCntnr" id="accordion">
		        	<SinglePersonaHeader personas={this.props.personas}/>
	            </div>
			)
		}
		else{
			console.log('not rendering personas');
			return (
				<div className="col-sm-12 panel-group multiPersonaCntnr" id="accordion">
					
				</div>
			)
		}
	}
});

module.exports = PersonaIndex;