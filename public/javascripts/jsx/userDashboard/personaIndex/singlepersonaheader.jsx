//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var React = require('react');
var PersonaMenu = require('./personamenu');

var SinglePersonaHeader = React.createClass({
	getInitialState: function(){
		return {
			activePersona: this.props.personas[0].id 
		}
	},
	setActive: function(event){
		
		var clickedPersona = event.target.dataset.personaId;
		this.setState({
			activePersona: clickedPersona
		});
		console.log(clickedPersona);
	},
	render: function(){
		var self = this;
		var mapPersonas = this.props.personas.map(function(persona, index){
			var name = persona.persona_name;
			var personaId = persona.id;
			var href = '#' + personaId;
			var image = persona.image;
			var myClassName = "panel-collapse fade collapse personaInfo";

			if(self.state.activePersona == personaId){
				myClassName+=' in';
			}
		

			return (
				<div key={personaId} className="col-sm-12 panel panel-default personaCntnr">
                    <div className="col-sm-12 panel-heading personaHeading">
                        
                        <div className="col-sm-3 imgCntnr">
                            <img src={image}></img>
                        </div> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" data-persona-id={personaId} href={href} onClick={self.setActive}>{name}</a>
                        </h4>
                    </div>
                    <div id={personaId} className={myClassName}>
                    	<PersonaMenu />
                    </div>
                </div>
			);
		});
		return(
			<div>
				{mapPersonas}
			</div>
		)
	}
});

module.exports = SinglePersonaHeader;