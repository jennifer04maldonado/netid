var CommunityListComponent = require('./communityListContainer');
var CommunityDetailComponent = require('./communityDetailContainer');
var	MembersListModal = require('./../common/membersListModal');

var CommunitiesContainer = React.createClass({
	getInitialState: function(){		
		return {
            isDetail: false,
            communities : [],
            activeCommunity: null
        }
	},	
	componentDidMount: function(){	
		var self = this;
		$.get( ".././json_files/data/netid-account/personas/community.json", function( dataArray, status ) {
		  //console.log('status: '  + status);	
			if (status == 'success') {				
		 	    if (self.isMounted()) {
		 	        self.setState({
		 		    	communities: dataArray
		         	});	     
		 	    }
		 	}	 
		});
	},	
	toggleView: function(communityId){		
		//console.log('communityName:' + communityId);		
		if (this.state.isDetail) {
			this.setState({isDetail: false});	
		} else {
			this.setActiveCommunity(communityId);
			this.setState({isDetail: true});		
		}
	},	

	setActiveCommunity: function(communityId) {
		var activeCommunity = null;		
		$.each(this.state.communities, function (index,  row) {
			if (communityId == row.id) {
				//console.log("activePersonaId=" + persona.id);
				activeCommunity = row;
			}
		});
		//console.log('active community:' + activeCommunity.name);
		this.setState({activeCommunity: activeCommunity});

  }, 	
	render: function(){
		var communityBody = null;
		if (this.state.isDetail) {
			communityBody = <CommunityDetailComponent activeCommunity={this.state.activeCommunity} viewList={this.toggleView} />;
		} else {
			communityBody = <CommunityListComponent setActiveCommunity={this.setActiveCommunity} communities={this.state.communities} viewDetail={this.toggleView} />;
		}
		return(						
			<div>
				{communityBody}
				<MembersListModal activeCommunity={this.state.activeCommunity} />		        		
			</div>
		)
	}
});

module.exports = CommunitiesContainer;
