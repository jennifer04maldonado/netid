//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var CollapseContainer = require('./collapseContainer');
var AddPersona = require('./addpersona');

var SinglePersonaHeader = React.createClass({
	getInitialState: function() {
		return {			
			messagesSortedByPersonas: []
		}	
	},	
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.messagesSortedByPersonas != this.props.messagesSortedByPersonas) {	      	
			this.setState({messagesSortedByPersonas: nextProps.messagesSortedByPersonas});
		}		

	},	
	setActivePersona: function(event){
		this.props.setActivePersona(event.target.dataset.personaId);
	},
	setAddPersonaType: function(personaType) {
		this.props.setAddPersonaType(personaType);
	},	
	render: function(){
		var self = this;
		var mapPersonas = this.props.personas.map(function(persona, index){
			var name = persona.persona_name;
			var personaId = persona.id;
			var href = '#' + personaId;
			var image = persona.image;

			var myClassName = "col-sm-12 panel panel-default personaCntnr";
			var personaHeadingClassName = "col-sm-12 panel-heading personaHeading";	
			var notifcationClassName = "notificationContainer";


			var messageCount = self.state.messagesSortedByPersonas[personaId] ? self.state.messagesSortedByPersonas[personaId].length : 0;
			if (self.props.activePersona.id == personaId) {
				notifcationClassName += ' selected';
			}

			return (
				<li key={personaId} className={myClassName} data-persona-id={personaId} >
                    <span className={personaHeadingClassName}>
                        <span className="col-sm-3 imgCntnr" >
                            <img src={image}></img>
                        </span> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-persona-id={personaId} onClick={self.setActivePersona} href={href} >{name}</a>
                        </h4>
                    </span> 
                    <span className={notifcationClassName}>	
						<a href="#"><span className="badge">{messageCount}</span></a>
		            </span>                   
                </li>
			);
		});

		
		return(
			<div>
				<h4>{this.props.headingTitle}</h4>
				<ul>
				{mapPersonas}	
				</ul>
				<AddPersona personaType={this.props.personaType} setAddPersonaType={this.setAddPersonaType}/>
			</div>
		)
	}
});

module.exports = SinglePersonaHeader;