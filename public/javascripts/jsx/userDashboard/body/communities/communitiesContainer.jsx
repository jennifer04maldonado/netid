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
								<div className="col-sm-12 row commSearchAndFilter">	
									<div className="col-sm-4 col-sm-offset-6 commSearch">
									    <input type="text" className="form-control" placeholder="Search"></input>
									</div>
									<div className="col-sm-2 commFilter">    
									    <div className="dropdown">
										    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
										        Filter 
										        <span className="caret"></span>
										    </button>
										    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
											    <li><a href="#">Show Public</a></li>
											    <li><a href="#">Show All</a></li>
											</ul>
										</div>
							   		</div>
							   	</div>	
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
								<p>Manage your created Communities</p>
								<div className="panel-group" id="accordion">
								    <div className="panel panel-default">
									    <div className="panel-heading">
									        <h4 className="panel-title">
										        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
										          Cheese Lovers
										        </a>
									        </h4>
									    </div>
									    <div id="collapseOne" className="panel-collapse collapse in">
									      	<div className="panel-body">
												<div className="col-sm-12 commDetailBody">
													<div className="col-sm-4 changeCommImage">
														<img src={"/images/cheese.jpg"}/>
														<label htmlFor="exampleInputFile">Change Image</label>
							   							<input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>	
													</div>
													<div className="col-sm-8 commDetailText">
														<a className="removeMembers" href="#membersListModal" data-toggle="modal" data-target="#membersListModal">Remove Members</a>
														<div className="dropdown">
															<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
															   	Change permissions
															    <span className="caret"></span>
															</button>
															<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
															    <li><a href="#">Public</a></li>
															    <li><a href="#">Private</a></li>
															    <li><a href="#">Secret</a></li>
															</ul>
														</div>
														<fieldset className="form-group">
													    	<label htmlFor="commName">Community Name</label>
													    	<textarea name="name" className="form-control" placeholder="Cheese Lovers" rows="1"></textarea>
													    	<label htmlFor="commDescription">Community Description</label>
													    	<textarea name="name" className="form-control" placeholder="We all love cheese. Cheese all day every day. " rows="3"></textarea>
													    </fieldset>
													    <button type="submit" className="btn col-sm-12 updateBtn">Update</button>	
													</div>	
												</div>									      
											</div>
									    </div>
								    </div>
								    <div className="panel panel-default">
									    <div className="panel-heading">
									        <h4 className="panel-title">
										        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
										           Los Angeles Lakers Fans
										        </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" className="panel-collapse collapse">
									        <div className="panel-body">
									      		<div className="col-sm-12 commDetailBody">
													<div className="col-sm-4 changeCommImage">
														<img src={"/images/lakers.jpeg"}/>
														<label htmlFor="exampleInputFile">Change Image</label>
							   							<input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>	
													</div>
													<div className="col-sm-8 commDetailText">
														<div className="dropdown">
															<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
															   	Change permissions
															    <span className="caret"></span>
															</button>
															<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
															    <li><a href="#">Public</a></li>
															    <li><a href="#">Private</a></li>
															    <li><a href="#">Secret</a></li>
															</ul>
														</div>
														<fieldset className="form-group">
													    	<label htmlFor="commName">Community Name</label>
													    	<textarea name="name" className="form-control" placeholder="Los Angeles Lakers Fans" rows="1"></textarea>
													    	<label htmlFor="commDescription">Community Description</label>
													    	<textarea name="name" className="form-control" placeholder="Laker Nation. " rows="3"></textarea>
													    </fieldset>
													    <button type="submit" className="btn col-sm-12 updateBtn">Update</button>	
													</div>	
												</div>	
									        </div>
									    </div>
									</div>
								    <div className="panel panel-default">
									    <div className="panel-heading">
									        <h4 className="panel-title">
										        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										         Target Discounts Community
										        </a>
									        </h4>
								    	</div>
									    <div id="collapseThree" className="panel-collapse collapse">
									        <div className="panel-body">
									        	<div className="col-sm-12 commDetailBody">
													<div className="col-sm-4 changeCommImage">
														<img src={"/images/targetC.jpg"}/>
														<label htmlFor="exampleInputFile">Change Image</label>
							   							<input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>	
													</div>
													<div className="col-sm-8 commDetailText">
														<div className="dropdown">
															<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
															   	Change permissions
															    <span className="caret"></span>
															</button>
															<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
															    <li><a href="#">Public</a></li>
															    <li><a href="#">Private</a></li>
															    <li><a href="#">Secret</a></li>
															</ul>
														</div>
														<fieldset className="form-group">
													    	<label htmlFor="commName">Community Name</label>
													    	<textarea name="name" className="form-control" placeholder="Target Discounts Community" rows="1"></textarea>
													    	<label htmlFor="commDescription">Community Description</label>
													    	<textarea name="name" className="form-control" placeholder="Who doesn't enjoy shopping at Target? Imagine that....plus savings. We share the best coupons but only if you are a member of our Community!" rows="3"></textarea>
													    </fieldset>
													    <button type="submit" className="btn col-sm-12 updateBtn">Update</button>	
													</div>	
												</div>	
									        </div>
									    </div>
								    </div>
								</div>
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
