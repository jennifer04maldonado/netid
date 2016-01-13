var MyCommunityListContainer = React.createClass({
	viewDetail: function(event){		
		var communityId = event.target.dataset.communityId;
		console.log('viewDetail: ' + communityId);

		this.props.setActiveCommunity(communityId);		
		  //this call clicks the hidden detail tab in the community nav
	    $('#communityDetailTab').tab('show');
	},		
	setActiveCommunity: function(communityId){				
		this.props.setActiveCommunity(communityId);		
	},			
	render: function(){
		var self = this;
		var myCommunitiesNode = this.props.myCommunities.map(function(community, index)  {
	               			return (								  								    	
								  	<div className="col-sm-12 panel-body" key={community.id}>
								    	<div className="col-sm-11 media">
											<div className="media-left">
											    <a href="#">
											      <img data-community-id={community.id} onClick={self.viewDetail} className="media-object" src={community.pic}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5>
											    	<a data-community-id={community.id} href="#" onClick={self.viewDetail} className="media-heading">{community.name}</a>
											    </h5>
											    <span>{community.description} what is going on</span>
												<h6>
													<a onClick={self.setActiveCommunity.bind(self, community.id)} href="#membersListModal" data-toggle="modal" data-target="#membersListModal">
														<img src={"/images/friends.png"}/>{community.members.length} Members
													</a>
													<i className="fa fa-unlock-alt">
														<span>Public</span>
													</i>
												</h6>
											</div>
										</div>
										<div className="col-sm-1 row removePostBtn">
											<div className="dropdown">
											    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
											        <span className="caret"></span>
											    </button>
											    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
												    <table className="table table-hover">
												    	<tbody>
												    		<tr>
													    		<td>Leave Community</td>
												    		</tr>
												    		<tr>
												    			<td>Share with Connections</td>
												    		</tr>	
												    	</tbody>
												    </table>
												</ul>
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
