var CalendarModal = require('./../../common/commCalendarModal');
var CommentContainer = require('./../../common/commentContainer');

var CommunityAdminContainer = React.createClass({	
	getInitialState: function() {
		return {
			myCommunities: [],
			status: '',
			activeCommunityType: ''
			}	
	},	
  	setActiveCommunityType: function(type) {
		//console.log('communityType : ' + type);  		
		this.setState({activeCommunityType: type});

  	},		
  	updateCommunity: function(event) {
  		event.preventDefault();

		// console.log('communityId : ' + event.target.communityId.value);  		
		// console.log('name: ' + event.target.name.value);
		// console.log('description: ' + event.target.description.value);
		// console.log('type: ' + this.state.activeCommunityType);
		 //console.log('members: ' + event.target.memberIds.value);
		var community = {};
  		var status = '';

		try {
	  		community.id = event.target.communityId.value;  		
			community.name = event.target.name.value;
			community.pic = event.target.pic.value;		
			community.description = event.target.description.value;
			community.community_type = this.state.activeCommunityType;
		    community.created_date = new Date();
		    //value has string of member ids delimited by comma. 
		    //has to saved into a array
		    community.members =  event.target.memberIds.value.split(",");
		    
		    this.props.updateCommunity(community);
		    status = 'success';
		} catch (err){
			status = 'error';
			console.log('error: ' + err);
		} finally {
			console.log('status:' + status);
			this.setState({status: status});			
		}				   

  	},		
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.persona_name);
		if (nextProps.myCommunities !== this.props.myCommunities) {
			this.setState({myCommunities: nextProps.myCommunities});
		}
  	},	
			
	render: function(){
		var self = this;		
		var communityNodes = this.state.myCommunities.map(function(community, index){										

			return (
				    <div key={community.id} className="panel panel-default">
					    <div className="panel-heading">
					        <h4 className="panel-title">
						        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href={"#communityId"+community.id}>
						          {community.name}
						        </a>
					        </h4>
					    </div>
					    <div id={"communityId"+community.id} className={index == 0 ? "collapse-manage panel-collapse collapse in" : "collapse-manage panel-collapse collapse"}>
					      	<div className="panel-body">
								<div className="col-sm-12 commDetailBody">
									<form onSubmit={self.updateCommunity}>
										<input type="hidden" name="communityId" value={community.id} />
										<div className="col-sm-4 changeCommImage">
											<input name="pic" type="hidden" value={community.pic} />
											<img src={community.pic}/>
											<label htmlFor="exampleInputFile">Change Image</label>
				   							<input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>	
										</div>
										<div className="col-sm-8 commDetailText">
											<a className="removeMembers" href="#removeMembersModal" data-toggle="modal" data-target="#removeMembersModal">Remove Members</a>
											<div className="dropdown">
												<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
												   	Change permissions
												    <span className="caret"></span>
												</button>
												<input name='type' type="hidden" value={community.community_type} />
												<ul name="type" className="dropdown-menu" aria-labelledby="dropdownMenu1">
												    <li><a onClick={self.setActiveCommunityType.bind(self, 'Public')} value="Public" href="#">Public</a></li>
												    <li><a onClick={self.setActiveCommunityType.bind(self, 'Private')} value="Private" href="#">Private</a></li>
												    <li><a onClick={self.setActiveCommunityType.bind(self, 'Secret')} value="Secret" href="#">Secret</a></li>
												</ul>
											</div>
											<fieldset className="form-group">
										    	<label htmlFor="commName">Community Name</label>
										    	<input name="name" className="form-control" placeholder={community.name} rows="1"/>
										    	<label htmlFor="commDescription">Community Description</label>
										    	<textarea name="description" className="form-control" placeholder={community.description} rows="3"></textarea>
										    </fieldset>
										    <input type="hidden" name="memberIds" value={community.members} />
										    <button type="submit" className="btn col-sm-12 updateBtn">Update</button>	
										</div>
									</form>		
								</div>									      
							</div>
					    </div>
				    </div>
				)						
		});

		return(
			<div className="panel-group" id="accordion">			
				<p>Manage your created Communities</p>
				<div className={this.state.status == 'success' ? 'alert alert-success' : 'hidden'}>
  					<strong>Success!</strong>
				</div>
				<div className={this.state.status == 'error' ? 'alert alert-danger' : 'hidden'}>
				  <strong>Error updating!</strong>
				</div>				
				{this.state.message}
				{communityNodes}

			</div>
		)
	}
});

module.exports = CommunityAdminContainer;
