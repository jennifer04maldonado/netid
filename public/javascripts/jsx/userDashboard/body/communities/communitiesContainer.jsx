var CommunityListComponent = require('./communityListContainer');
var MyCommunityListComponent = require('./myCommunityListContainer');
var CommunityDetailComponent = require('./communityDetailContainer');
var CreateCommunity = require('./createCommunity');
var CommunityAdminComponent = require('./communityAdminContainer');


var CommunitiesContainer = React.createClass({
	
	getInitialState: function(){		
		return {
            activeCommunity: null
        }
	},	
	addAllCommunitiesState: function(community){		
		this.props.addAllCommunitiesState(community);
	},	
    addMyCommunitiesState: function(community){
    	this.props.addMyCommunitiesState(community);
    },
	setActiveCommunity: function(communityId){		
		this.props.setActiveCommunity(communityId);		
	},			    	
	postToCommunity: function(message){			
		this.props.postToCommunity(message);
	},
	updateCommunity: function(updatedCommunity){			
		this.props.updateCommunity(updatedCommunity);
	},	
	render: function(){
		var self = this;
		return(						
				<div className="col-sm-12 bodyContent">
					<div className="col-sm-2 communityTitle">
						<h4><img src={"/images/members.png"}/>Communities</h4>
					</div>
					<div className="col-sm-10 communityNavTabs">
						<ul className="nav nav-tabs" role="tablist">
							<li className="active" role="presentation"><a href="#explore" className="current" aria-controls="explore" role="tab" data-toggle="tab">Explore</a></li>
							<li role="presentation"><a href="#communities" aria-controls="communities" role="tab" data-toggle="tab">My Communities</a></li>
							<li role="presentation"><a href="#manage" aria-controls="manage" role="tab" data-toggle="tab">Manage</a></li>
							<li role="presentation"><a href="#create" aria-controls="create" role="tab" data-toggle="tab">Create</a></li>
							<li className="hidden" role="presentation"><a id='communityDetailTab' href="#communityDetail" aria-controls="detail" role="tab" data-toggle="tab"></a></li>
						</ul>
						<div className="tab-content col-sm-10">
							<div role="tabpanel" className="tab-pane tabExplore active " id="explore">
								<CommunityListComponent setActiveCommunity={this.setActiveCommunity} 
														allCommunities={this.props.allCommunities}/>
							</div>
							<div role="tabpanel" className="tab-pane tabCommunities fade" id="communities">
								<div className="panel panel-default">
									<MyCommunityListComponent setActiveCommunity={this.setActiveCommunity} 															  
															  myCommunities={this.props.myCommunities}/>
								</div>
							</div>
							<div role="tabpanel" className="tab-pane tabManage fade" id="manage">
								<CommunityAdminComponent myCommunities={this.props.myCommunities}
														 updateCommunity={this.props.updateCommunity}/>
							</div>
							<div role="tabpanel" className="tab-pane tabCreate fade" id="create">
								<CreateCommunity activePersona={this.props.activePersona}
												setActiveCommunity={this.setActiveCommunity}
												addAllCommunitiesState={this.addAllCommunitiesState}
	                       		 				addMyCommunitiesState={this.addMyCommunitiesState} />
	                       		 				
							</div>
							<div role="tabpanel" className="tab-pane tabCreate fade" id="communityDetail">
								<CommunityDetailComponent activeCommunity={this.props.activeCommunity} 
														  postToCommunity={this.postToCommunity}
														  activePersona={this.props.activePersona}				  	            
														  activeCommunityPosts={this.props.activeCommunityPosts} />							
							</div>

						</div>
					</div>
			</div>
		)
	}
});

module.exports = CommunitiesContainer;
