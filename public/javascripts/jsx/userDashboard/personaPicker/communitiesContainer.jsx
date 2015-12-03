

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
					<div className="tab-content">
						<div role="tabpanel" className="tab-pane tabExplore fade in active" id="explore">
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
							<div className="col-sm-3 well">
								<a href="#"><img src={"/images/starwars.jpg"}/></a>
								<h5>Star Wars Fans</h5>
								<p> A community of Star Wars fans. Join the Dark Side.</p>
								<div className="col-sm-12 memberCount"><a href="#">150 Members</a></div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane tabCommunities fade" id="communities">...</div>
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
