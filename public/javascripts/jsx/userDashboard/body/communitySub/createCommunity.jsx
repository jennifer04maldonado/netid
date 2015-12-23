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
		this.props.viewDetailAfterAdd(community.id);
	},
	createCommunityIPFS: function(){		
	
	},
	onChangeHandler: function(event){
		console.log('event: ' + event.target.name);
		console.log('value: ' + event.target.value);
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
			<div className="well col-sm-12">
            	<form name="createCommunity" action="">
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
				        <input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Public' } name="type" id="radio1" value="Public" type="radio"/>Public
				        <input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Private'} name="type" id="radio2" value="Private" type="radio"/>Private
				        <input onChange={this.onChangeHandler} checked={this.state.community.community_type =='Secret'} name="type" id="radio3" value="Secret" type="radio"/>Secret
					</div>
                	<input name="name" onChange={this.onChangeHandler} value={this.state.community.name} className="col-sm-8 col-sm-offset-2 commCreateName" placeholder="Community Name"></input>
					<textarea name="description" onChange={this.onChangeHandler} value={this.state.community.description} className="col-sm-8 col-sm-offset-2 commCreateAbout" placeholder="What is this Community about?" rows="5"></textarea>
				</form> 
				<button onClick={this.createCommunity} type="submit" className="col-sm-offset-2 col-sm-8 btn btn-default">Create</button>	
			</div>	

        );
    }
});

module.exports = CreateCommunity;
