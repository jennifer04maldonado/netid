var CommunityListContainer = React.createClass({
	getInitialState: function(){		
		return {
            activeCommunty: null
        }
	},		
	viewDetail: function(event){		
		//console.log('viewDetail: ' + event.target.dataset.communityId);
		var communityId = event.target.dataset.communityId;
		this.props.viewDetail(communityId);
	},		
	viewMembers: function(communityId){				
		this.props.setActiveCommunity(communityId);
	},			
	render: function(){
		var self = this;
		var allCommunitiesNode = this.props.allCommunities.map(function(community, index)  {
	               			return (
									<div className="col-sm-3 well" key={community.id}>									       
										<img onClick={self.viewDetail} src={community.pic} data-community-id={community.id}/>
										<h5>{community.name}</h5>
										<p>{community.description}</p>
										<div className="col-sm-12 memberCount">
											<img src={"/images/friends.png"}/>
											<a href="#" onClick={self.viewMembers.bind(self, community.id)} data-community-id={community.id} data-toggle="modal" data-target='#membersListModal'>{community.members_count} Members</a>
										</div>
									</div>
								)
							});

		var myCommunitiesNode = this.props.myCommunities.map(function(community, index)  {
	               			return (								  								    	
								  	<div className="panel-body" key={community.id}>
								    	<div className="media">
											<div className="media-left">
											    <a href="#">
											      <img className="media-object" src={community.pic}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5 className="media-heading">{community.name}</h5>
											    <span>{community.description}</span>
												<h6><a href="#membersListModal" data-toggle="modal" data-target="#membersListModal"><img src={"/images/friends.png"}/>130 Members</a><i className="fa fa-unlock-alt"><span>Public</span></i></h6>
											</div>
										</div>
								  	</div>
								)
							});


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
						</ul>
						<div className="tab-content col-sm-10">
							<div role="tabpanel" className="tab-pane tabExplore active " id="explore">
								{allCommunitiesNode}
							</div>
							<div role="tabpanel" className="tab-pane tabCommunities fade" id="communities">
								<div className="panel panel-default">
								{myCommunitiesNode}									
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
							</div>
							<div role="tabpanel" className="tab-pane tabCreate fade" id="create">
			                    <div className="well col-sm-12">
			                    	<div className="row col-sm-4 col-sm-offset-4 addPersonaImage">
										<div className="col-sm-11 col-sm-offset-1 addImageBtn">
											<img src={"/images/avatar.png"}/>
										</div>
										<div className="col-sm-8 col-sm-offset-1 addImageUpload">
											<div className = "form-group addImageUploadBtn">
											    <input type = "file" id = "inputfile"></input>
											</div>
										</div>
									</div>
									<div className="col-sm-5 col-sm-offset-4 newCommOptions">
										<h4 className="commRadioTitle">What kind of Community is this?</h4>
								        <input name="radio" id="radio1" value="option1" type="radio"/>Public
								        <input name="radio" id="radio2" value="option2" type="radio"/>Private
								        <input name="radio" id="radio3" value="option3" type="radio"/>Secret
									</div>
				                    <form action="">
				                    	<textarea className="col-sm-8 col-sm-offset-2 commCreateName" placeholder="Community Name" rows="1"></textarea>
										<textarea className="col-sm-8 col-sm-offset-2 commCreateAbout" placeholder="What is this Community about?" rows="5"></textarea>
									</form> 
									<button type="submit" className="col-sm-offset-2 col-sm-8 btn btn-default">Submit</button>	
								</div>	
							</div>
						</div>
					</div>
			</div>
		)
	}
});

module.exports = CommunityListContainer;
