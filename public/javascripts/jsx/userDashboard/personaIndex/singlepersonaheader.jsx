//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var CollapseContainer = require('./collapseContainer');
var AddPersona = require('./addpersona');

var SinglePersonaHeader = React.createClass({
	getInitialState: function(){
		return {
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

			if (self.state.selectedPersonaId == personaId) {
				notifcationClassName += ' selected';
			}

			return (
				<li key={personaId} className={myClassName} data-persona-id={personaId} >
					<span className={notifcationClassName}>	
						<a href="#"><span className="badge">{index}</span></a>
		            </span>
                    <span className={personaHeadingClassName}>
                        <span className="col-sm-3 imgCntnr" >
                            <img src={image}></img>
                        </span> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-persona-id={personaId} onClick={self.setActivePersona} href={href} >{name}</a>
                        </h4>
                    </span>                    
                </li>
			);
		});
		return(
			<div>
				<ul>
				{mapPersonas}	
				</ul>
				<AddPersona />
			</div>
		)
	}
});

module.exports = SinglePersonaHeader;