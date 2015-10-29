//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: LINKS FOR EACH PERSONA IN SINGLEPERSONAHEADER
var PersonaMenu = React.createClass({
	render: function(){
		return(
	        <div className="panel-body">
	           <div className="col-sm-4 col-sm-offset-5 ctrlPanel">
	              	<span>
	               		<a>Communities</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Transactions</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Messages</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Friends</a>
	               		<span></span>
               		</span>
	           </div>
	        </div>
		)
	}
});


//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: PERSONA CONTAINERS FOR EACH PERSONA IN ARRAY
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

//INPUT: SOCIAL PERSONAS AND PROF PERSONAS FROM DASHBOARD-AJAX-CALLS-REACT.JS FILE
//OUTPUT: PERSONA ELEMENTS IN PERSONA INDEX
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

let App = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            personaId: null

        }
	},
	grabPersonas: function(){
		$.get('.././json_files/personaSchema.json', function(result) {
	     	var personaArray = result;
		     if (this.isMounted()) {
		       this.setState({
		         personas: personaArray
		       });
		    }
	   	}.bind(this));
	},
	componentDidMount: function() {
		this.grabPersonas();   
  	},
	render: function(){
		
		return (
			<div>
				<AddPersona />
				<PersonaIndex personas={this.state.personas}/>
			</div>
		)
		console.log(this.props.personas);
	}
});
ReactDOM.render(
	<App />, 
	document.getElementById('personaIndex')
);