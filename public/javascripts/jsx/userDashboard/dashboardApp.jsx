var NetidAPI = require('../../libraries/netid-api-wrapper.js')
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');
var LoadingModalComponent = require('./common/loadingModal');
var AddPersonaModal = require('./common/addPersonaModal');

var DashboardApp = React.createClass({	
	getDefaultProps: function() {
	    return {
	      value: 'default value'
	    };
	},
	getInitialState: function(){		
		return {
            personas : [],
            activePersona: null,
            headerSelection: 'home',
            peerIdHash: 'QmXrWdaoazTSGEs1Y1geBQnCQzrjL7nNvAYRbPMU9EGru',
            useIPFS: false,
            showLoading: true,
            api: {},
            memberPersona: null,
            viewMemberPersona: false
        }
	},
	initialize: function(){
		console.log("Loading from ajax")
		var self = this;
		$.get( ".././json_files/personaSchema.json", function( personaArray, status ) {
		  //console.log('status: '  + status);	
			if (status == 'success') {				
		 	    if (self.isMounted()) {
		 	        self.setState({
		 	        	showLoading: false,
		 		    	personas: personaArray,
		 		        activePersona: personaArray[0]
		         	});	     
		 	    }
		 	}	 
		});
	},


	initializeIPFS: function(){
	    var net = new NetidAPI();
	    //example of using the netid api to get the eth balance
	    var web3test = net.account.getBalance();
	    console.log(web3test)
		var self = this 
		self.setState({
			api: net
		})
	    if(!this.isMounted()) return
	    var ee = net.account.getEventEmitter()
	    ee.on('init',err => {
	    	console.log('Net Object '+ net)
	      if(!err && this.isMounted()){
	      	var schemObj = net.account.schemaObject
	        self.setState({ 
	        	showLoading: false,
	        	personas: schemObj,
	        	activePersona: schemObj[0]
	        })
	      }
	      if(err){
	      	console.log(err)
	      }
	    })	
	},

    componentDidMount: function(){
    	if(this.state.useIPFS){
    		this.initializeIPFS()
    	}else {
    		this.initialize()
    	}

    },
  	setActiveBody: function(headerSelection) {
  		this.setState({
  			headerSelection: headerSelection,
  			viewMemberPersona: false //set view members to false
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
				activePersona: activePersona,
				viewMemberPersona:false
			});
		});
	},	
	//when user clicks user link, it renders their information in the profile tab
	setMemberPersona: function(memberPersona) {
		//console.log('parent setMemberPersona: ' + memberPersona.persona_name);
		this.setState({headerSelection: 'settings'});
		this.setState({viewMemberPersona: true});
		this.setState({memberPersona: memberPersona});
	},		
    render: function(){		

        return (
            <div className="dashboardContainer">
                <div id="personaPicker" className="personaPicker">
					<PersonaPickerComponent headerSelection={this.state.headerSelection} setActiveBody={this.setActiveBody} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>               
	                <div className="col-sm-12 mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} setActivePersona={this.setActivePersona} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>
	                    	</div>
	                    </div>
	                    <div className="row col-sm-8 mainView">
	                        <div className="col-sm-12" id="viewPort">
	                       		 <MainBodyComponent viewMemberPersona={this.state.viewMemberPersona} memberPersona={this.state.memberPersona} headerSelection={this.state.headerSelection} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash}/>
	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent setMemberPersona={this.setMemberPersona} activePersona={this.state.activePersona} useIPFS={this.state.useIPFS} peerIdHash={this.state.peerIdHash} api={this.state.api}/>
	                    </div>
	                </div>
	            </div>
				<LoadingModalComponent showLoading={this.state.showLoading}/>
				<AddPersonaModal personaType="Social" />		        		
				<AddPersonaModal personaType="Professional" />		        		
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
