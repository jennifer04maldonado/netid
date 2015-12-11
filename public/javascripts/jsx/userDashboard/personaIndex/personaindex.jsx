
//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX

var SinglePersonaHeader = require('./singlepersonaheader');


var PersonaIndex = React.createClass({
	getDefaultProps: function() {
		return {
			socialPersonaHeading: 'Social',
			professionalPersonaHeading: 'Professional',
		}
	},
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},	
	render: function(){
		var socialPersonas = [];
		var profPersonas = [];
		$.each(this.props.personas, function(index, persona) {
			if (persona.persona_type == 'Social') {
				socialPersonas.push(persona);
			} else 
			if (persona.persona_type == 'Professional') {
				profPersonas.push(persona);
			}		
		});		
		console.log('social personas' + socialPersonas);
		console.log('professional personas' + profPersonas);

		var myClassName = 'col-sm-12 panel-group multiPersonaCntnr';
		if(this.props.personas.length !== 0){
			//console.log('rendering personas');
			return (
		        <div className={myClassName} id="accordion">
		        	<div className="col-sm-12 personaActiveImage">
                            <div className="personaImage">
                                <img src={this.props.activePersona.image}/>
                            </div>
                            <div className="col-sm-12 personaActiveName">
                            	<h3>{this.props.activePersona.persona_name}</h3>
                            </div>
                    </div>
                    <div id='socialPersonaContainer'>
		        		<SinglePersonaHeader headingTitle={this.props.socialPersonaHeading} setActivePersona={this.setActivePersona} personas={socialPersonas} />
					</div>
					<div id='professionalPersonaContainer'>
		        		<SinglePersonaHeader headingTitle={this.props.professionalPersonaHeading} setActivePersona={this.setActivePersona} personas={profPersonas} />
		        	</div>
					<div id='personaBarFiller'> </div>
	            </div>
			)
		}
		else{
			//console.log('not rendering personas');
			return (
				<div className={myClassName} id="accordion">
					
				</div>
			)
		}
	}
});

module.exports = PersonaIndex;

