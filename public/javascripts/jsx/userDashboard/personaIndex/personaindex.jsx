//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX
var SinglePersonaHeader = require('./singlepersonaheader');

var PersonaIndex = React.createClass({
	getDefaultProps: function() {
		return {
			personaTypeSocial: 'Social',
			personaTypeProfessional: 'Professional'
		}
	},
	getInitialState: function(){		
		return {
            //personaType : this.props.personaTypeSocial
        }
	},	
	setActivePersona: function(activePersonaId) {
		this.props.setActivePersona(activePersonaId);
	},
	setAddPersonaType: function(personaType) {
		this.props.setAddPersonaType(personaType);
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

		var myClassName = 'col-sm-12 panel-group multiPersonaCntnr';
		if(this.props.personas.length !== 0){
			//console.log('rendering personas');
			return (
		        <div className={myClassName}>
		        	<div className="col-sm-12 personaActiveImage">
                        <div className="col-sm-12 personaActiveName">
                        	<h3>{this.props.activePersona.persona_name}</h3>
                        </div>
                        <div className="personaImage">
                            <img src={this.props.activePersona.image}/>
                        </div>
                    </div>
                    <div id="socialPersonaContainer">
		        		<SinglePersonaHeader personaType={this.props.personaTypeSocial} activePersona={this.props.activePersona} headingTitle={this.props.socialPersonaHeading} setActivePersona={this.setActivePersona} personas={socialPersonas} setAddPersonaType={this.setAddPersonaType}/>
					</div>
					<div id="professionalPersonaContainer">
		        		<SinglePersonaHeader personaType={this.props.personaTypeProfessional} activePersona={this.props.activePersona} headingTitle={this.props.professionalPersonaHeading} setActivePersona={this.setActivePersona} personas={profPersonas} setAddPersonaType={this.setAddPersonaType}/>
		        	</div>
					<div id="personaBarFiller"> </div>				
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

