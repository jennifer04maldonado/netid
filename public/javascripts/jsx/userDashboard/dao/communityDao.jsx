var CommunityDao = {
	getInitialState: function(){		
			return {
				allCommunities: [],
				myCommunities: [],
				activeCommunity: null,
				activeCommunityMembers: []            
            }
	},
	componentWillUpdate: function(nextProps, nextState) {		
	 	if (nextState.activePersona !== this.state.activePersona) {
	  // 		console.log('init community this persona: ' + this.state.activePersona);
			// console.log('init community next persona:' + nextState.activePersona);
			var self = this;	    	
			if (this.props.useIPFS) {
				this.getAllCommunitiesIPFS(function (){
					self.getMyCommunities(nextState.activePersona);			
				});    			
			} else {
				this.getAllCommunities(function (){
					self.getMyCommunities(nextState.activePersona);			
				});				
			}
	  	}
	},
    getAllCommunities: function(done){
		//console.log("Pre loading all community table from ajax");
		var self = this;
		//only load once
		if (this.state.allCommunities.length == 0) {
			$.get( ".././json_files/data/netid-account/personas/communities.json", function( result, status ) {
					if (status == 'success') {	
					 	self.setState({allCommunities: result});
					 	done();
				 	}
			});
		} else {
			done();
		}
		
	},
    getAllCommunitiesIPFS: function(done) {
		//console.log("Pre loading all community table from IPFS");
		//only load once
		  	var net = this.state.api;	    
	       	var allCommunities = net.account.getAllCommunities();		    		       	
		    net.account.ee.on('allCommunities',err => {
				 this.setState({allCommunities: net.account.allCommunities});
		         done();
		     });
	},
    getMyCommunities: function() {
		var self = this;
		var myCommunities = [];
		var personaId = this.state.activePersona.id;
		$.each(this.state.allCommunities, function (index,  community) {			
			if (community.members.indexOf(personaId) > -1) {
	    		//console.log('this persona belongs to this community: ' + community.name);
	    		myCommunities.push(community);  	
	      	}
	    });	
	    //console.log('done getting communities just for personaId: ' + personaId);
	    self.setState({myCommunities: myCommunities});
    },
    setActiveCommunity: function(communityId) {
    	var self = this;
		this.state.allCommunities.forEach(function (community, index){
		 	if (communityId == community.id) {		 		
		 		self.setState({activeCommunity: community});
		 		self.setActiveCommunityMembers(community.members);
		 	}
		 });
	},
    setActiveCommunityMembers: function(membersIdArray) {
    	var membersList = [];
    	var self = this;
		this.state.allPersonas.forEach(function (persona, index){
			if (membersIdArray.indexOf(persona.persona_id) > -1) {
//				console.log("found member info: " + persona.persona_name);
				membersList.push(persona);
			}
		});
		self.setState({activeCommunityMembers: membersList});
	},   
	//callback from CommunityDao
    addAllCommunitiesState: function(community){
 		var allCommunities = this.state.allCommunities;		
		allCommunities.push(community);		
    	this.setState({allCommunities: allCommunities});
    },               
    addMyCommunitiesState: function(community){
 		var myCommunities = this.state.myCommunities;		
		myCommunities.push(community);		
    	this.setState({myCommunities: myCommunities});
    },	 

    updateCommunity: function(updatedCommunity){
		this.updateAllCommunityState(updatedCommunity);
		this.updateMyCommunityState(updatedCommunity);
	},
    updateAllCommunityState: function(updatedCommunity){
 		var allCommunities = this.state.allCommunities;		
 		var newAllCommunities = [];
 		allCommunities.forEach(function (community, index) {
			if (community.id == updatedCommunity.id) {
				newAllCommunities.push(updatedCommunity);		
			} else {
				newAllCommunities.push(community);		
			}			
 		});
 		//TODO:
 		//this is where you would call IPFS API to updated communities file

    	this.setState({allCommunities: newAllCommunities});    	
    },
    updateMyCommunityState: function(updatedCommunity){

 		var myCommunities = this.state.myCommunities;		
 		var newMyCommunities = [];
 		myCommunities.forEach(function (community, index) {
			if (community.id == updatedCommunity.id) {
				newMyCommunities.push(updatedCommunity);		
			} else {
				newMyCommunities.push(community);		
			}			
 		});
    	this.setState({myCommunities: newMyCommunities}); 	
    }
};


module.exports = CommunityDao;
