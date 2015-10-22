

//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
var SinglePersonaHeader = React.createClass({
	getInitialState: function(){
		return {
			activePersona: this.props.personas[0].id 
		}
	},
	setActive: function(event){
		var clickedPersona = event.target.id;
		this.setState({
			activePersona: clickedPersona
		});
	},
	render: function(){
		var self = this;
		var mapPersonas = this.props.personas.map(function(persona, index){
			var name = persona.persona_name;
			var personaId = persona.id;
			var href = '#' + personaId;
			var image = persona.image;
			var myClassName = "panel-collapse collapse in personaInfo";
			if(self.state.activePersona !== personaId){
				myClassName= myClassName.replace(' in', '');
			}
		

			return (
				<div key={personaId} className="col-sm-12 panel panel-default personaCntnr">
                    <div className="col-sm-12 panel-heading personaHeading">
                        
                        <div className="col-sm-3 imgCntnr">
                            <img src={image}></img>
                        </div> 
                        <h4 className="col-sm-9 panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href={href}>{name}</a>
                        </h4>
                    </div>
                    <div id={personaId} className={myClassName}>
                        <div className="panel-body">
                           <div className="col-sm-4 col-sm-offset-5 ctrlPanel">
                               <span>Communities <span></span></span>
                               <span>Transactions <span></span></span>
                               <span>Messages <span></span></span>
                               <span>Friends <span></span></span>
                           </div>
                        </div>
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


//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX
var PersonaIndex = React.createClass({
	render: function(){
		return (
	        <div className="col-sm-12 panel-group multiPersonaCntnr" id="accordion">
	        	<SinglePersonaHeader personas={this.props.personas}/>
            </div>
		)
	}
});

//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var AddPersona = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 addPersona">
				<p>Add New Persona</p>
			</div>
		)
	}
});

var App = React.createClass({
	getInitialState: function(){
		return {
            personas : personas
        }
	},
	render: function(){
		return (
			<div>
				<AddPersona />
				<PersonaIndex personas={this.state.personas}/>
			</div>
		)
	}
});
ReactDOM.render(
	<App />, 
	document.getElementById('personaIndex')
);