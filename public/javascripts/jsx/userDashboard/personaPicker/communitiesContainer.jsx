

var CommunitiesContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-2 communityTitle">
					<h4><img src={"/images/members.png"}/>Communities</h4>
				</div>
				<div className="col-sm-9 communityNavTabs">
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation"><a href="#explore" aria-controls="explore" role="tab" data-toggle="tab">Explore</a></li>
						<li role="presentation"><a href="#communities" aria-controls="communities" role="tab" data-toggle="tab">My Communities</a></li>
						<li role="presentation"><a href="#manage" aria-controls="manage" role="tab" data-toggle="tab">Manage</a></li>
						<li role="presentation"><a href="#create" aria-controls="create" role="tab" data-toggle="tab">Create</a></li>
					</ul>
					<div className="tab-content col-sm-12">
						<div role="tabpanel" className="tab-pane tabExplore fade in active" id="explore">
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">52,583 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/disney.jpg"}/></a>
								<h5>Disneyland Gangstahs</h5>
								<p> We own da Majik Kingdum, yo. Come to Disneyland</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/coffee.png"}/></a>
								<h5>Coffee Addicts</h5>
								<p> Join us and drink some coffee or something</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">887 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount">
									<img src={"/images/friends.png"}/>
									<a href="#">150 Members</a>
								</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane tabCommunities fade" id="communities">
							<div className="panel panel-default">
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/cooking.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Cooking At Home</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-unlock-alt"></i>
												Public
											</h6>
										</div>
									</div>
							  	</div>
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/football-fanss.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Football Fans</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-unlock-alt"></i>
												Public
											</h6>
										</div>
									</div>
							  	</div>
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/coders.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Coders United</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-lock"></i>
												Private
											</h6>
										</div>
									</div>
							  	</div>
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/cooking.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Cooking At Home</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-unlock-alt"></i>
												Public
											</h6>
										</div>
									</div>
							  	</div>
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/cooking.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Cooking At Home</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-unlock-alt"></i>
												Public
											</h6>
										</div>
									</div>
							  	</div>
							  	<div className="panel-body">
							    	<div className="media">
										<div className="media-left">
										    <a href="#">
										      <img className="media-object" src={"/images/cooking.jpg"}/>
										    </a>
										</div>
										<div className="media-body">
										    <h5 className="media-heading">Cooking At Home</h5>
										    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
											<h6>
												<img src={"/images/friends.png"}/>
													<a href="#">130 Members</a>
												<i className="fa fa-unlock-alt"></i>
												Public
											</h6>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane tabManage fade" id="manage">...</div>
						<div role="tabpanel" className="tab-pane tabCreate fade" id="create">...</div>
					</div>
				</div>
				<a href="#"><i className="fa fa-search"></i></a>
			</div>
		)
	}
});

module.exports = CommunitiesContainer;
