var NetidAPI = require('../../libraries/netid-api-wrapper.js')
var PersonaContainerComponent = require('./personaIndex/personaContainer');
var PersonaPickerComponent = require('./personaPicker/personaPickerContainer');
var RightControlComponent = require('./accordionRightPanel/accordionRightPanel');
var MainBodyComponent = require('./body/mainBodyContainer');
var LoadingModalComponent = require('./common/loadingModal');
var AddPersonaModal = require('./common/addPersonaModal');
var	MembersListModal = require('./common/membersListModal');

var CommunityDaoComponent = require('./dao/communityDao');
var PersonaDaoComponent = require('./dao/personaDao');
var MessageDaoComponent = require('./dao/messageDao');


var DashboardApp = React.createClass({		
	//mixins are used to extend this Class
	//separated for easier readability and maintenance
	mixins: [CommunityDaoComponent, PersonaDaoComponent, MessageDaoComponent],
	getDefaultProps: function() {
	    return {
	      useIPFS: false
		}      
	},
	getInitialState: function(){		
		return {
            showLoading: true,
            api: {},
            memberPersona: null,
            viewMemberPersona: false,
			personaType:''
			}
	},
    componentDidMount: function(){
    	var self  = this;
    	if(this.props.useIPFS){
    		this.initializeIPFS();
    	} else {
    		this.initialize();
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
		console.log("Loading from IPFS")
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


    render: function(){		    	

        return (
            <div className="dashboardContainer">
                <div id="personaPicker" className="personaPicker">
					<PersonaPickerComponent activePersona={this.state.activePersona} useIPFS={this.props.useIPFS} />               
	                <div className="col-sm-12 mainUserDashboardArea">
	                    <div className="col-sm-2" id="personaIndex">
	                    	<div>
	                    		<PersonaContainerComponent personas={this.state.personas} 
	                    								   setActivePersona={this.setActivePersona} 
	                    								   activePersona={this.state.activePersona} 
	                    								   messagesSortedByPersonas={this.state.messagesSortedByPersonas}
	                    								   setAddPersonaType={this.setAddPersonaType} />
	                    	</div>
	                    </div>
	                    <div className="row col-sm-8 mainView">
	                        <div className="col-sm-12" id="viewPort">
	                       		 <MainBodyComponent api={this.state.api} 
	                       		 					viewMemberPersona={this.state.viewMemberPersona} 
	                       		 					memberPersona={this.state.memberPersona} 
	                       		 					personas={this.state.personas}	                       		 					
	                       		 					activePersona={this.state.activePersona} 	                       		 					
	                       		 					useIPFS={this.props.useIPFS} 
	                       		 					myCommunities={this.state.myCommunities} 
	                       		 					fromGroup={this.state.fromGroup} 
	                       		 					allMessages={this.state.allMessages} 
	                       		 					allCommunities={this.state.allCommunities}
	                       		 					addAllCommunitiesState={this.addAllCommunitiesState}
	                       		 					addMyCommunitiesState={this.addMyCommunitiesState}
	                       		 					activeCommunity={this.state.activeCommunity}	                       		 					
	                       		 					setActiveCommunity = {this.setActiveCommunity} />

	                        </div>
	                    </div>
	                    <div className="col-sm-2" id="rightControlPanel">
	   						<RightControlComponent setMemberPersona={this.setMemberPersona} 
	   											   activePersona={this.state.activePersona} 
	   											   allMessages={this.state.allMessages} 
	   											   useIPFS={this.props.useIPFS} 
	   											   api={this.state.api} 
	   											   setActiveCommunity={this.setActiveCommunity}
	   											   myCommunities={this.state.myCommunities} />
	                    </div>
	                </div>
	            </div>
				<LoadingModalComponent showLoading={this.state.showLoading}/>
				<AddPersonaModal useIPFS={this.props.useIPFS} personaType={this.state.personaType} api={this.state.api} personas={this.state.personas} updatePersonas={this.updatePersonas} addPersona={this.addPersona}/>		        		
				<MembersListModal activeMembersList={this.state.activeCommunityMembers} />
            </div>
        );
    }
});


ReactDOM.render(
	<DashboardApp />, 
	document.getElementById('mainBody')
);
