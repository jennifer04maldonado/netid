var NetidAPI = require('../../libraries/netid-api-wrapper.js')
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');
var LoadingModalComponent = require('./common/loadingModal');
var AddPersonaModal = require('./common/addPersonaModal');

var CommunityDaoComponent = require('./dao/communityDao');

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
            api: {},
            memberPersona: null,
            viewMemberPersona: false,
            personaTable: [],
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


	initializeIPFS: function(done){	    
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
	    	console.log('Net API Object Created '+ net)
	      if(!err && this.isMounted()){
	      	var schemObj = net.account.schemaObject
	        self.setState({ 
	        	showLoading: false,
	        	personas: schemObj,
	        	activePersona: schemObj[0]
	        });
	        done();	        
	      }
	      if(err){
	      	console.log(err)
	      }
	    })	
	},

    componentDidMount: function(){
    	var self  = this;
    	if(this.props.useIPFS){
    		this.initializeIPFS(function() {
    			self.loadPersonaTableIPFS();    			
    		});    		
    	} else {
    		this.initialize();
    		this.loadPersonaTable();
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
    loadPersonaTable: function(){
		console.log("Pre loading all persona table from ajax")
		var self = this;
		$.get( ".././json_files/data/netid-account/personas/personaTable.json", function( result, status ) {
		  //console.log('status: '  + status);	
			if (status == 'success') {				
	 	        self.setState({
	 		    	personaTable: result
	         	});	     
		 	}	 
		});
    },
    loadPersonaTableIPFS: function(){
		console.log("Pre loading all persona table from IPFS");	    
	  	var net = this.state.api;	    
       	var personaTable = net.account.loadPersonaTable();		    		       	
	     net.account.ee.on('personaTable',err => {
	         this.setState({personaTable: net.account.personaTable});
	     });

    },
    getPersonaByPersonaId: function(personaId,done){
		//console.log("getting persona from table. id= " + personaId);	    
	    $.each(this.state.personaTable, function (index,  persona) {
	      if (personaId == persona.persona_id) {
	        console.log("found persona activePersonaId =" + persona.persona_id);	        
	        done(persona);
	      }
	    });				
    },
    setMyCommunities: function(myCommunities){
    	//console.log('my community records:' + myCommunities.length);
    	this.setState({myCommunities: myCommunities});
    },    
    setAllCommunities: function(allCommunities){
    	//console.log('community records:' + allCommunities.length);
    	this.setState({allCommunities: allCommunities});
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
	                       		 <MainBodyComponent viewMemberPersona={this.state.viewMemberPersona} memberPersona={this.state.memberPersona} headerSelection={this.state.headerSelection} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} myCommunities={this.state.myCommunities} allCommunities={this.state.allCommunities}/>
	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent setMemberPersona={this.setMemberPersona} activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} api={this.state.api} myCommunities={this.state.myCommunities} />
	                    </div>
	                </div>
	            </div>
				<LoadingModalComponent showLoading={this.state.showLoading}/>
				<AddPersonaModal activePersonaType="Social" />		        		
				<CommunityDaoComponent ipfsInit={this.state.ipfsInit} activePersona={this.state.activePersona} setMyCommunities = {this.setMyCommunities} setAllCommunities = {this.setAllCommunities}  useIPFS={this.props.useIPFS} api={this.state.api}/>		        		
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
