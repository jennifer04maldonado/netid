var React = require('react');
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MessagesComponent = require('./personaPicker/messageContainer');
var AccountHistoryComponent = require('./personaPicker/accountHistoryContainer');
var CommunitiesComponent = require('./personaPicker/communitiesContainer');

var DashboardApp = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            activePersona: null,
            activeBody: <MessagesComponent />
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
  	},
	setActiveBody: function(headerSelection) {
		console.log("header selection: " + headerSelection);
		var activeBody = null;

		switch (headerSelection) {
			case 'messages':
				this.setState({activeBody: activeBody});
				activeBody = <MessagesComponent />;
				break;
			case 'accountHistory':
				activeBody = <AccountHistoryComponent />;
				break;
			case 'communities':
				activeBody = <CommunitiesComponent />;
				break;
			default:
				activeBody = <CommunitiesComponent />;

		}

		this.setState({activeBody: activeBody});
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
					<PersonaPickerComponent setActiveBody={this.setActiveBody} activePersona={this.state.activePersona}/>               
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
	                       		{this.state.activeBody}

 								</div> 
	                        </div>
	                    </div>
	                    <div className="col-sm-3" id="rightControlPanel">
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
