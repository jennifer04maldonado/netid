var CommunityDetailContainer = React.createClass({
	viewList: function(event){				
		this.props.viewList();
	},		
	render: function(){
		return(
			<div className="col-sm-12 bodyContent">
				<div className="col-sm-12 commDetailTitle">	
					<h4><a onClick={this.viewList} href="#back"><i className="fa fa-arrow-left"></i>Back to Explore Communities</a></h4>
				</div>	
				<div className="col-sm-10 col-sm-offset-2 commDetailBody">
					<img src={"/images/starwars.jpg"} className="col-sm-offset-2"/>
					<div className="col-sm-offset-2 col-sm-6 commDetailText">	
						<h3>{this.props.activeCommunity.name}</h3>
						<p>{this.props.activeCommunity.id}</p>
						<p>{this.props.activeCommunity.description}</p>
						<h6>
							<img src={"/images/friends.png"}/>
								<a href="#">130 Members</a>
						</h6>
					</div>	
				</div>	
			</div>
		)
	}
});

module.exports = CommunityDetailContainer;
