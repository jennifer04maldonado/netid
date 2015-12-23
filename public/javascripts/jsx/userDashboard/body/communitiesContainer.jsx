var CommunityListComponent = require('./communityListContainer');
var CommunityDetailComponent = require('./communityDetailContainer');
var	MembersListModal = require('./../common/membersListModal');

var CommunitiesContainer = React.createClass({
	getInitialState: function(){		
		return {
            isDetail: false,
            activeCommunity: null
        }
	},	
  	componentWillReceiveProps: function(nextProps) {    
	    // if (nextProps.activePersona !== this.props.activePersona) {
	    // 	console.log('setting comms in center2' + nextProps.allCommunities);
	    // 	this.setState({ communities: this.props.allCommunities });
	    // }
  	},	
	componentDidMount: function(){	
 		//console.log('communites contianer: ' + this.props.activePersona.id); 														   
 		//console.log('communites contianer2: ' + this.props.allCommunities.length); 		
 		//this.setState({ allCommunities: this.props.allCommunities });
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
		$.each(this.props.allCommunities, function (index,  row) {
			if (communityId == row.id) {
				//console.log("activePersonaId=" + persona.id);
				activeCommunity = row;
			}
		});
		//console.log('active community:' + activeCommunity.name);
		this.setState({activeCommunity: activeCommunity});
  	}, 	

	addAllCommunitiesState: function(community){		
		this.props.addAllCommunitiesState(community);
	},	
    addMyCommunitiesState: function(community){
    	this.props.addMyCommunitiesState(community);
    },
	render: function(){
		var communityBody = null;
		if (this.state.isDetail) {
			communityBody = <CommunityDetailComponent activeCommunity={this.state.activeCommunity} viewList={this.toggleView} />;
		} else {
			communityBody = <CommunityListComponent activePersona={this.props.activePersona} 
													setActiveCommunity={this.setActiveCommunity} 
													allCommunities={this.props.allCommunities} 
													myCommunities={this.props.myCommunities} 
													viewDetail={this.toggleView} 
													addAllCommunitiesState={this.addAllCommunitiesState}
	                       		 					addMyCommunitiesState={this.addMyCommunitiesState} 
	                       	/>
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
