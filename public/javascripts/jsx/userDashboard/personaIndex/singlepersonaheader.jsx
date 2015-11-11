//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var React = require('react');
var PersonaMenu = require('./personamenu');

var SinglePersonaHeader = React.createClass({
	getInitialState: function(){
		return {
			activePersonaId: ''
		}
	},
	mouseEnterHandler: function(event){
		this.setState({
			activePersonaId: event.target.dataset.personaId
		});
	},
	mouseLeaveHandler: function(event){
		this.setState({
			activePersonaId: ''
		});
	},
	render: function(){
		var self = this;
		var mapPersonas = this.props.personas.map(function(persona, index){
			var name = persona.persona_name;
			var personaId = persona.id;
			var href = '#' + personaId;
			var image = persona.image;
			var myClassName = "col-sm-12 panel panel-default personaCntnr out";
			if (!self.props.isOpen) {
				if (self.state.activePersonaId != personaId) {
					myClassName = myClassName.replace('out', 'in');
				}
			}


			return (
				<div key={personaId} className={myClassName}>
                    <div className="col-sm-12 panel-heading personaHeading">
                        <div className="col-sm-3 imgCntnr" >
                            <img src={image} data-persona-id={personaId} key={personaId} onMouseEnter={self.mouseEnterHandler} onMouseLeave={self.mouseLeaveHandler}></img>
                        </div> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-persona-id={personaId} href={href} >{name}</a>
                        </h4>
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