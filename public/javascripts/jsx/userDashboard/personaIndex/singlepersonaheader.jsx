//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var React = require('react');
var PersonaMenu = require('./personamenu');
var CollapseContainer = require('./collapseContainer');

var SinglePersonaHeader = React.createClass({
	getInitialState: function(){
		return {
			hoverPersonaId: '',
			selectedPersonaId: this.props.personas[0].id //set first persona as defalt
		}
	},
	setActivePersona: function(event){
		//console.log('set active persona ' + event.target.dataset.personaId);
		this.props.setActivePersona(event.target.dataset.personaId);
		
		this.setState({
			selectedPersonaId: event.target.dataset.personaId
		});
	},
	clickCollapseHandler: function() {
		this.props.collapsePersona();
	},
	mouseEnterHandler: function(event){
		this.setState({
			hoverPersonaId: event.target.dataset.personaId
		});
	},
	mouseLeaveHandler: function(event){
		this.setState({
			hoverPersonaId: ''
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
			var personaHeadingClassName = 'col-sm-12 panel-heading personaHeading';	
			var notifcationClassName = 'notificationContainer';

			if (!self.props.isOpen) {
				if (self.state.hoverPersonaId != personaId) {
					myClassName = myClassName.replace('out', 'in');
					personaHeadingClassName += ' hidden';
				}
			}

			if (self.state.selectedPersonaId == personaId) {
				notifcationClassName += ' selected';
			}

			//render the collapse link on first persona only
			var collapseContainer;
			if (index == 0) {
				collapseContainer = <CollapseContainer collapsePersona={self.clickCollapseHandler} />;
			}
			return (
				<div key={personaId} className={myClassName} data-persona-id={personaId} onMouseEnter={self.mouseEnterHandler} onMouseLeave={self.mouseLeaveHandler}>
					<div className={notifcationClassName}>	
          				<input type='radio' />
		            </div>
                    <div className={personaHeadingClassName}>

                        <div className="col-sm-3 imgCntnr" >
                            <img src={image}></img>
                        </div> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-persona-id={personaId} onClick={self.setActivePersona} href={href} >{name}</a>
                        </h4>
                    </div>
                    {collapseContainer}
                </div>
			);
		});
		return(
			<div>
				{mapPersonas}
				<div id='personaBarFiller'> </div>
			</div>
		)
	}
});

module.exports = SinglePersonaHeader;