var CreateCommunity = React.createClass({		
	getDefaultProps: function() {
		return {
			
		}
	},
	getInitialState: function() {
	    return {
	    	community: {}
	    }
  	},
	createCommunity: function(event){
		
		event.preventDefault();
		if (this.props.useIPFS) {
			this.createCommunityIPFS();			
		} else {
			this.createCommunityAJAX();
		}		
		//calls child function	
		this.resetForm();
		//setview to detail on new community just added
		$("#communityDetailTab").tab("show");
	},
	createCommunityAJAX: function(){		
		var community = {};
		var members = [];

		community.id = JSON.stringify(Math.floor(Math.random()*100000000000000000));				
		community.name = this.state.community.name;
		community.description = this.state.community.description;
		community.community_type = this.state.community.community_type;
		community.pic = "/images/backpack.jpg";
	    community.created_date = "01/01/2015";
	    community.members_count ="1";
		
		var personaId = this.props.activePersona.id;
		console.log('add new community for personaId '+ personaId);
		members.push(this.props.activePersona.id);

		community.members = members;

		//update community list		
		this.props.addAllCommunitiesState(community);		
		this.props.addMyCommunitiesState(community);	
		this.props.setActiveCommunity(community.id);
		
	},
	createCommunityIPFS: function(){		
	
	},
	onChangeHandler: function(event){
		// console.log('event: ' + event.target.name);
		// console.log('value: ' + event.target.value);
		//TODO: validation
		var community = this.state.community;
		var elementName = event.target.name;

		switch (elementName)  {
			case "name":
					community.name = event.target.value;
					break;
			case "description":
					community.description = event.target.value;
					break;
			case "type":
					community.community_type = event.target.value;
					break;
			default: 			
		}
		this.setState({community: community});
	},
    resetForm: function(){		
    	//console.log('resetting form');
    	var reset = {};
    	reset.description = "";
		this.setState({community: reset});
	},	
    render: function(){
        return (	           			    
			<div className="well col-sm-12 commCreateWell">
				<div className="col-sm-12 commDetailsTitle">
					<h4>General Information</h4>
				</div> 
				<div className="col-sm-12 commCreateTop">
	            	<form action="">
	                	<div className="row col-sm-4 addPersonaImage">
							<div className="col-sm-11 col-sm-offset-1 addImageBtn">
								<img src={"/images/addComm.png"}/>
							</div>
							<div className="col-sm-8 col-sm-offset-1 addImageUpload">
								<div className = "form-group addImageUploadBtn">
								    <input type = "file" id = "inputfile"></input>
								</div>
							</div>
						</div>
	                	<input name="name" className="col-sm-8 commCreateName" onChange={this.onChangeHandler} value={this.state.community.name} placeholder="Community Name"></input>
						<textarea name="description" className="col-sm-8 commCreateAbout" onChange={this.onChangeHandler} value={this.state.community.description} placeholder="What is this Community about?" rows="7"></textarea>
					</form>
				</div>
				<div className="col-sm-12 commDetailsTitle">
					<h4>Community Details</h4>
				</div> 
				<div className="col-sm-12 commCreateBottom">
					<div className="col-sm-12 newCommOptions">
						<h4 className="commRadioTitle col-sm-2">Permissions</h4>
				        <div className="col-sm-3 col-sm-offset-2 commRadioButtons">
				        	<h5><input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Public' } name="type" id="radio1" value="Public" type="radio"/>
				        	Public</h5>
				        	<p>Your Community will be searchable to all</p>
				        </div>
				        <div className="col-sm-3 commRadioButtons">
				        	<h5><input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Private'} name="type" id="radio2" value="Private" type="radio"/>
				        	Private</h5>
				        	<p>Your Community will be invite-only</p>
				        </div>
				         <div className="col-sm-2 commRadioButtons">	
				        	<h5><input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Secret'} name="type" id="radio3" value="Secret" type="radio"/>
				        	Secret</h5>
				        	<p>Your Community will not be searchable</p>
				        </div>	
					</div>
					<div className="col-sm-12 row commKeyWords">
						<h4 className="col-sm-4">Key Words
							<p>Separated by commas</p>
						</h4>
						<textarea className="col-sm-8 commCreateKeywords" name="keywords" onChange={this.onChangeHandler} value={this.state.community.keywords} placeholder="Help more people discover your Community by using accurate and descriptive words or phrases" rows="7"></textarea>
					</div>
				</div>	
				<button className="col-sm-12 btn btn-default" onClick={this.createCommunity} type="submit">Create</button>	
			</div>	

        );
    }
});

module.exports = CreateCommunity;
