var React = require('react');
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');

var DashboardApp = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            activePersona: null
        }
	},
	grabPersonas: function(){
		console.log('grabbing personas api');
		$.get('.././json_files/personaSchema.json', function(result) {
	     	var personaArray = result;
		     if (this.isMounted()) {
		       this.setState({
		         personas: personaArray,
		         activePersona: personaArray[0]
		       });
		    }
	   	}.bind(this));
	},
	componentDidMount: function() {
		this.grabPersonas();   
		console.log('set default persona' + this.state.personas[0] );
		this.setState({activePersona: this.state.personas[0]});

  	},
	setActivePersona: function(activePersonaId) {
		var activePersona = null;
		$.each(this.state.personas, function (index,  persona) {
			console.log("persona id:" + persona.id);
			console.log("persona name:" + persona.persona_name);			
			if (activePersonaId == persona.id) {
				console.log("activePersonaId=" + persona.id);
				activePersona = persona;
			}
		});

		this.setState({
			activePersona: activePersona
		});
	},
    render: function(){

        return (
            <div className="row dashboardContainer">
                <div id='personaPicker' className="col-sm-12 personaPicker">
					<PersonaPickerComponent activePersona={this.state.activePersona}/>               
	                <div className="row mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} setActivePersona={this.setActivePersona}/>
	                    	</div>
	                    </div>
	                    <div className="col-sm-7 mainView row">
	                        <div className="col-sm-12 focusedPersona">
	                            <p>Your Bio - Complete your Bio!</p>
	                        </div>
	                        <div className="col-sm-12 netIdSpace"></div>
	                        <div className="col-sm-12" id="viewPort">
	                       		<div id="MySplitter">
   									<div> First content goes here </div>
   									<div> Second content goes here </div>
 								</div> 
	                        </div>
	                    </div>
	                    <div className="col-sm-3" id="rightControlPanel">
	   						<RightControlComponent />
	                    </div>
	                </div>
	            </div>
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
