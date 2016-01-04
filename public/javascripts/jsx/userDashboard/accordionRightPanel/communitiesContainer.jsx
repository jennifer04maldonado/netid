var CommunitiesContainer = React.createClass({
	setActiveCommunity: function(communityId){		
		this.props.setActiveCommunity(communityId);		
	},	
	render: function(){
		var self = this;
		var communityNodes = this.props.myCommunities.map(function(community, index){
			return (
				<div key={community.id}>
					<div className="col-sm-3 commIndImg">
						<img src={community.pic}/>
					</div>
					<div className="col-sm-8 commInd">
						<ul>
							<li className="commName"><a href="#">{community.name}</a></li>
							<li className="commNumber"><a onClick={self.setActiveCommunity.bind(self,community.id)} href="#membersListModal" data-toggle="modal" data-target="#membersListModal">{community.members.length} Members</a></li>
						</ul>
					</div>					
				</div>					
			);
		});


        return(
			<div id="communitiesContainer">
				<div className="col-sm-12 commTitleCntnr">
					<h5>Communities	</h5>	
				</div>
				<div className="col-sm-12 commSearchCntnr">
					<input type="text" className="form-control" placeholder="Search"></input>	
				</div>
				<div className="col-sm-12 messageRightContent">
					{communityNodes}
				</div>
			</div>
		)
	}
});


module.exports = CommunitiesContainer;
