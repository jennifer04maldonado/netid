//var ipfs = window.ipfsAPI('localhost', '5001');
var ipfs = window.ipfsAPI();
var NetidAPI = require('../../libraries/netid-api-wrapper.js')

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
            peerIdHash: 'QmXrWdaoazTSGEs1Y1geBQnCQzrjL7nNvAYRbPMU9EGru',
            useIPFS: true,
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
		

/*		ipfs.cat(hash, function (err, res) {
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
		});*/
	},

    componentDidMount: function(){
	    var net = new NetidAPI();
		var self = this 
	    /*
	    When a component inside the component being rendered by the router also needs
	    access to the boards api, it appears unitialized and never initializes to it
	    for no apparent reason. Calling init twice (one automgically and one
	    when the root component mounts) works as a cheap, horrible workaround
	    */
	    //net.account.init()
	    if(!this.isMounted()) return
	    var ee = net.account.getEventEmitter()
	    ee.on('init',err => {
	      if(!err && this.isMounted()){
	      	var test = net.account.schemaObject
	      	console.log(test)

	        self.setState({ 
	        	showLoading: false,
	        	personas: test,
	        	activePersona: test[0]
	        })
	        //this.init(net.account)
	      }
	      if(err){
	      	console.log(err)
	      }
	    })
	    /*ee.on('settings for '+this.props.params.boardname+'@'+this.props.params.userid, (res) => {
	      if(!this.isMounted()) return true
	      console.log('Found name:',res.fullname)
	      this.setState({ name: res.fullname.trim(), description: res.description })
	    })
	    if(boards.isInit || this.state.api){
	      this.setState({api: true})
	      this.init(boards)
	      boards.getBoardSettings(this.props.params.userid,this.props.params.boardname)
	    }*/

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
