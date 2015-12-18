var NetidAPI = require('../../libraries/netid-api-wrapper.js')
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');
var LoadingModalComponent = require('./common/loadingModal');
var AddPersonaModal = require('./common/addPersonaModal');

var CommunityDaoComponent = require('./dao/communityDao');
var PersonaDaoComponent = require('./dao/personaDao');

var DashboardApp = React.createClass({	
	getDefaultProps: function() {
	    return {
	      useIPFS: true
	    };
	},
	getInitialState: function(){		
		return {
            personas : [],
            activePersona: null,
            headerSelection: 'home',
            peerIdHash: 'QmXrWdaoazTSGEs1Y1geBQnCQzrjL7nNvAYRbPMU9EGru',
            useIPFS: false,
            showLoading: false,
            api: {},
            memberPersona: null,
            viewMemberPersona: false,
            allPersonas: [],
			showLoading: true,
			allCommunities: [],
			myCommunities: []
			}
	},
	initialize: function(){
		console.log("Loading from ajax")
		var self = this;
		$.get( ".././json_files/data/netid-account/personas/personaSchema.json", function( personaArray, status ) {
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
	    console.log('Balance: '+web3test+' Ether')
		var self = this 
		self.setState({
			api: net
		})
	    if(!this.isMounted()) return
	    var ee = net.account.getEventEmitter()
	    ee.on('init',err => {
	    	console.log('Net API Object Created '+ net)
	      if(!err && this.isMounted()){
	      	var schemObj = net.account.schemaObject
	        self.setState({ 
	        	showLoading: false,
	        	personas: schemObj,
	        	activePersona: schemObj[0]
	        });
	      }
	      if(err){
	      	console.log(err)
	      }
	    })	
	},

    componentDidMount: function(){
    	var self  = this;
    	if(this.props.useIPFS){
    		this.initializeIPFS();
    	} else {
    		this.initialize();
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
	setMemberPersona: function(personaId) {
		console.log('getting persona for personaId: ' + personaId);
		var self = this;
		this.getPersonaByPersonaId(personaId, function(persona) {			
			self.setState({headerSelection: 'profile'});
			self.setState({viewMemberPersona: true});
			self.setState({memberPersona: persona});
		});

	},		
    getPersonaByPersonaId: function(personaId,done){
		//console.log("getting persona from table. id= " + personaId);	    
	    $.each(this.state.allPersonas, function (index,  persona) {
	      if (personaId == persona.persona_id) {
	        console.log("found persona activePersonaId =" + persona.persona_id);	        
	        done(persona);
	      }
	    });				
    },
    //callback from CommunityDao
    setMyCommunities: function(myCommunities){
    	//console.log('my community records:' + myCommunities.length);
    	this.setState({myCommunities: myCommunities});
    },    
	//callback from CommunityDao
    setAllCommunities: function(allCommunities){
    	//console.log('community records:' + allCommunities.length);
    	this.setState({allCommunities: allCommunities});
    },           
	//callback from PersonaDao
    setAllPersonas: function(allPersonas){
    	//console.log('persona2 records:' + allPersonas.length);
    	this.setState({allPersonas: allPersonas});
    },    
    updatePersonas: function(tempSchema){
    	console.log(tempSchema)
    	self = this
    	self.setState({ 
        	personas: tempSchema
        });
    },
    render: function(){		
        return (
            <div className="dashboardContainer">
                <div id="personaPicker" className="personaPicker">
					<PersonaPickerComponent headerSelection={this.state.headerSelection} setActiveBody={this.setActiveBody} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} />               
	                <div className="col-sm-12 mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} setActivePersona={this.setActivePersona} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} />
	                    	</div>
	                    </div>
	                    <div className="row col-sm-8 mainView">
	                        <div className="col-sm-12" id="viewPort">
	                       		 <MainBodyComponent api={this.state.api} viewMemberPersona={this.state.viewMemberPersona} memberPersona={this.state.memberPersona} headerSelection={this.state.headerSelection} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} myCommunities={this.state.myCommunities} allCommunities={this.state.allCommunities}/>

	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent setMemberPersona={this.setMemberPersona} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} api={this.state.api} myCommunities={this.state.myCommunities} />
	                    </div>
	                </div>
	            </div>
				<LoadingModalComponent showLoading={this.state.showLoading}/>
				<AddPersonaModal activePersonaType="Social" api={this.state.api} personas={this.state.personas} updatePersonas={this.updatePersonas}/>		        		
				
				<CommunityDaoComponent activePersona={this.state.activePersona} setMyCommunities={this.setMyCommunities} setAllCommunities={this.setAllCommunities}  useIPFS={this.props.useIPFS} api={this.state.api}/>		     
				<PersonaDaoComponent activePersona={this.state.activePersona} setAllPersonas={this.setAllPersonas}  useIPFS={this.props.useIPFS} api={this.state.api}/>		     				
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
