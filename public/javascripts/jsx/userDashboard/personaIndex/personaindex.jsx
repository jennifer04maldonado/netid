//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX
var React = require('react');
var SinglePersonaHeader = require('./singlepersonaheader');


var PersonaIndex = React.createClass({
	clickCollapseHandler: function() {
		this.props.collapsePersona();
	},
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},	
	render: function(){
		var myClassName = 'col-sm-12 panel-group multiPersonaCntnr';
		if(this.props.personas.length !== 0){
			console.log('rendering personas');
			return (
		        <div className={myClassName} id="accordion">
		        	<SinglePersonaHeader setActivePersona={this.setActivePersona} collapsePersona={this.clickCollapseHandler} isOpen={this.props.isOpen} personas={this.props.personas}/>
		   
	            </div>
			)
		}
		else{
			console.log('not rendering personas');
			return (
				<div className={myClassName} id="accordion">
					
				</div>
			)
		}
	}
});

module.exports = PersonaIndex;