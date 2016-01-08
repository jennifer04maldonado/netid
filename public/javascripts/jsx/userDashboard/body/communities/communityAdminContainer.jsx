var CalendarModal = require('./../../common/commCalendarModal');
var CommentContainer = require('./../../common/commentContainer');

var CommunityAdminContainer = React.createClass({	
	getInitialState: function() {
		return {
			name: [],
			myCommunities: []
			}	
	},	
  	updateCommunity: function(event) {
  		event.preventDefault();
  		//TODO: update		
		console.log('communityId : ' + event.target.communityId.value);  		
		console.log('name: ' + event.target.name.value);
		console.log('description: ' + event.target.description.value);

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
					    <div id={"communityId"+community.id} className={index == 0 ? "panel-collapse collapse in" : "panel-collapse collapse"}>
					      	<div className="panel-body">
								<div className="col-sm-12 commDetailBody">
									<form onSubmit={self.updateCommunity}>
										<input type="hidden" name="communityId" value={community.id} />
										<div className="col-sm-4 changeCommImage">
											<img src={community.pic}/>
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
										    	<input name="name" className="form-control" placeholder={community.name} rows="1"/>
										    	<label htmlFor="commDescription">Community Description</label>
										    	<textarea name="description" className="form-control" placeholder={community.description} rows="3"></textarea>
										    </fieldset>
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
				{communityNodes}
			</div>
		)
	}
});

module.exports = CommunityAdminContainer;
