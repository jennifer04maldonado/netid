//var ipfs = window.ipfsAPI('localhost', '5001');
var ipfs = window.ipfsAPI();

var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');
var LoadingModalComponent = require('./common/loadingModal');

var DashboardApp = React.createClass({	
	getInitialState: function(){		
		return {
            personas : [],
            activePersona: null,
            headerSelection: 'home',
            peerIdHash: 'QmXrWdaoazTSGEs1Y1geBQnCQzrjL7nNvAYRbPMU9EGruc',
            useIPFS: false,
            showLoading: true
        }
	},
	grabPersonas: function(){
		var self = this;
		$.get( ".././json_files/personaSchema.json", function( personaArray, status ) {
		  //console.log('status: '  + status);	
			if (status == 'success') {				
		 	    if (self.isMounted()) {
		 	        self.setState({
		 		    	personas: personaArray,
		 		        activePersona: personaArray[0]
		         	});	     
		 	    }
		 	}	 
		});
	},

	grabPersonasIPFS: function(){
		var hash = this.state.peerIdHash + '/personaSchema.json';				
		var self = this;
		ipfs.cat(hash, function (err, res) {
			if (err || !res) return console.log('error:' + err);		  
			//readable stream
			if (res.readable) {
			  	res.pipe('readable stream: ' + process.stdout);
	        //string        	
			} else {
			  	var personaArray = JSON.parse(res);
			  	self.setState({
					personas: personaArray,
					activePersona: personaArray[0]
				});
			}
		});
	},

	componentDidMount: function() {
		if (this.state.useIPFS) {			
			console.log('fetching data from IPFS');
			var self = this;
		 	this.grabPersonasIPFS();
		} else {
			console.log('fetching data from AJAX');
			this.grabPersonas(); 			
		}	
		this.setState({showLoading: false});
  	},
  	setActiveBody: function(headerSelection) {
  		this.setState({
  			headerSelection: headerSelection
  		});
  	},
	setActivePersonaCont: function(activePersonaId, callback) {
		var activePersona = null;		
		$.each(this.state.personas, function (index,  persona) {
			//console.log("persona id:" + persona.id);
			//console.log("persona name:" + persona.persona_name);			
			if (activePersonaId == persona.id) {
				//console.log("activePersonaId=" + persona.id);
				activePersona = persona;
			}
		});
		callback(activePersona);
	},
	setActivePersona: function(activePersonaId) {
		var self = this;
		this.setActivePersonaCont(activePersonaId, function(activePersona) {
			self.setState({
				activePersona: activePersona
			});
		});
	},
	componentDidUpdate: function() {
		//console.log("componentDidUpdate");		
		//this.setState({showLoading: false});
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
				<LoadingModalComponent showLoading={this.state.showLoading}/>
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
