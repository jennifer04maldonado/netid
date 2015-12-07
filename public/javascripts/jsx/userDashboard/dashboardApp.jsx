//var ipfs = window.ipfsAPI('localhost', '5001');
var ipfs = window.ipfsAPI();

var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');

var DashboardApp = React.createClass({
	getInitialState: function(){
		return {
            personas : [],
            activePersona: null,
            headerSelection: 'home',
            peerIdHash: 'QmXrWdaoazTSGEs1Y1geBQnCQzrjL7nNvAYRbPMU9EGruc',
            useIPFS: false
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

	grabPersonasIPFS: function(done){
	   	//personaSchema
		var hash = this.state.peerIdHash + '/personaSchema.json';		
		var personaArray = [];
		ipfs.cat(hash, function (err, res) {
			if (err || !res) return console.log('error:' + err);		  
			//readable stream
			if (res.readable) {
			  	res.pipe('readable stream: ' + process.stdout);
	        //string        	
			} else {
			  	personaArray = JSON.parse(res);
				done(personaArray);
			}
		});
	},

	componentDidMount: function() {
		if (this.state.useIPFS) {			
			console.log('using ipfs');
			var self = this;
		 	this.grabPersonasIPFS(function (personaArray)  {
				self.setState({
					personas: personaArray,
					activePersona: personaArray[0]
				});
			});
		} else {
			console.log('ajax ipfs');
			this.grabPersonas(); 			
		}
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
					<PersonaPickerComponent headerSelection={this.state.headerSelection} setActiveBody={this.setActiveBody} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>               
	                <div className="col-sm-12 mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} setActivePersona={this.setActivePersona} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>
	                    	</div>
	                    </div>
	                    <div className="row col-sm-8 mainView">
	                        <div className="col-sm-12" id="viewPort">
	                       		 <MainBodyComponent headerSelection={this.state.headerSelection} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>
	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>
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
