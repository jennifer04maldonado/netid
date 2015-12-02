

var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./personaPicker/mainBodyContainer');

var DashboardApp = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            activePersona: null,
            headerSelection: 'home'
        }
	},
	grabPersonas: function(){
		//console.log('grabbing personas api');
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
  	},
  	setActiveBody: function(headerSelection) {
  		this.setState({
  			headerSelection: headerSelection
  		});
  	},
	setActivePersona: function(activePersonaId) {
		var activePersona = null;
		$.each(this.state.personas, function (index,  persona) {
			//console.log("persona id:" + persona.id);
			//console.log("persona name:" + persona.persona_name);			
			if (activePersonaId == persona.id) {
				//console.log("activePersonaId=" + persona.id);
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
					<PersonaPickerComponent headerSelection={this.state.headerSelection} setActiveBody={this.setActiveBody} activePersona={this.state.activePersona}/>               
	                <div className="col-sm-12 mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} setActivePersona={this.setActivePersona}/>
	                    	</div>
	                    </div>
	                    <div className="row col-sm-8 mainView">
	                        <div className="col-sm-12 netIdSpace"></div>
	                        <div className="col-sm-12" id="viewPort">
	                       		<div id="MySplitter">
	                       		 <MainBodyComponent headerSelection={this.state.headerSelection} activePersona={this.state.activePersona}/>
 								</div> 
	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent activePersona={this.state.activePersona}/>
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
