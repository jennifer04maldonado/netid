var MyCommunityListContainer = React.createClass({
	viewDetail: function(event){		
		var communityId = event.target.dataset.communityId;
		console.log('viewDetail: ' + communityId);

		this.props.setActiveCommunity(communityId);		
		  //this call clicks the hidden detail tab in the community nav
	    $('#communityDetailTab').tab('show');
	},		
	render: function(){
		var self = this;
		var myCommunitiesNode = this.props.myCommunities.map(function(community, index)  {
	               			return (								  								    	
								  	<div className="panel-body" key={community.id}>
								    	<div className="media">
											<div className="media-left">
											    <a href="#">
											      <img data-community-id={community.id} onClick={self.viewDetail} className="media-object" src={community.pic}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5> <a data-community-id={community.id} href="#" onClick={self.viewDetail} className="media-heading">{community.name}</a></h5>
											    <span>{community.description} what is going on</span>
												<h6><a href="#membersListModal" data-toggle="modal" data-target="#membersListModal"><img src={"/images/friends.png"}/>130 Members</a><i className="fa fa-unlock-alt"><span>Public</span></i></h6>
											</div>
										</div>
								  	</div>
								)
							});

		return(						
			<div>
			{myCommunitiesNode}
			</div>
		)
	}
});

module.exports = MyCommunityListContainer;
