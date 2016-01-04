var CommunityListContainer = React.createClass({
	viewDetail: function(event){		
		//console.log('viewDetail: ' + event.target.dataset.communityId);
		var communityId = event.target.dataset.communityId;
		this.props.setActiveCommunity(communityId);
		
		  //this call clicks the hidden detail tab in the community nav
	    $('#communityDetailTab').tab('show');

	},		
	setActiveCommunity: function(communityId){		
		this.props.setActiveCommunity(communityId);		
	},		
	render: function() {
		var self = this;
		var allCommunitiesNode = this.props.allCommunities.map(function(community, index)  {
	               			return (
									<div className="col-sm-3 well" key={community.id}>									       
										<img onClick={self.viewDetail} src={community.pic} data-community-id={community.id}/>
										<h5>{community.name}</h5>
										<p>{community.description}</p>
										<div className="col-sm-12 memberCount">
											<img src={"/images/friends.png"}/>
											<a href="#" onClick={self.setActiveCommunity.bind(self,community.id)} data-community-id={community.id} data-toggle="modal" data-target='#membersListModal'>{community.members.length} Members</a>
										</div>
									</div>
								)
							});
		return(						
			<div>
			{allCommunitiesNode}
			</div>
		)
	}
});

module.exports = CommunityListContainer;
