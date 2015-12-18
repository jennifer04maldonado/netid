var CommunityDao = React.createClass({
	getDefaultProps: function() {		
	    return {
	      //useIPFS: false
	    };
	},
	getInitialState: function(){		
		return {
            allCommunities : []
        }
	},
  	componentWillReceiveProps: function(nextProps) {    
	    if (nextProps.activePersona !== this.props.activePersona) {
	    	var self = this;	    	
			if (nextProps.useIPFS) {
				this.getAllCommunitiesIPFS(function (){
					self.getMyCommunities();			
				});    			
			} else {
				this.getAllCommunities(function (){
					self.getMyCommunities();			
				});				
			}
	    }
  	},    

    componentDidMount: function(){    
	},    
    getAllCommunities: function(done){
		//console.log("Pre loading all community table from ajax");
		var self = this;
		//only load once
			$.get( ".././json_files/data/netid-account/personas/communities.json", function( result, status ) {
				if (status == 'success') {	
				 	self.setState({allCommunities: result});
				 	self.props.setAllCommunities(result);	
				 	done();
			 	}
			});
		
	},
    getAllCommunitiesIPFS: function(done) {
		//console.log("Pre loading all community table from IPFS");
		//only load once
		  	var net = this.props.api;	    
	       	var allCommunities = net.account.getAllCommunities();		    		       	
		    net.account.ee.on('allCommunities',err => {
				 this.setState({allCommunities: net.account.allCommunities});
		         this.props.setAllCommunities(net.account.allCommunities);
		         done();
		     });
	},

    getMyCommunities: function() {
		var self = this;
		var myCommunities = [];
		var personaId = this.props.activePersona.id;
		$.each(this.state.allCommunities, function (index,  community) {			
			if (community.members.indexOf(personaId) > -1) {
	    		//console.log('this persona belongs to this community: ' + community.name);
	    		myCommunities.push(community);  	
	      	}
	    });	
	    //console.log('done getting communities just for personaId: ' + personaId);
		self.props.setMyCommunities(myCommunities);
    },
	render: function(){

        return(
			<div>
			</div>
		)
	}
});


module.exports = CommunityDao;
