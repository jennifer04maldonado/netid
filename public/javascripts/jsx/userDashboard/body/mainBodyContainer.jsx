var MessagesComponent = require('./messageContainer');
var InteractionsComponent = require('./interactionsContainer');
var SettingsComponent = require('./settingsContainer');
var ProfileComponent = require('./profileContainer');
var CommunitiesComponent = require('./communities/communitiesContainer');
var HomeComponent = require('./homeContainer');
var StatsComponent = require('./statsContainer');



var MainBodyContainer = React.createClass({
	getInitialState: function() {
		return {
			activePersona: this.props.activePersona
		}	
	},
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.persona_name);
		this.setState({activePersona: nextProps.activePersona});
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
		return(
			<div className="tab-content">
			  <div id="navHome" className="tab-pane fade in active">
			  		<HomeComponent useIPFS={this.props.useIPFS}
			  					   api={this.props.api}
			  					   activePersona={this.state.activePersona} />
			  </div>
			  <div id="navMessages" className="tab-pane fade">
			  		<MessagesComponent	activePersona={this.state.activePersona} 			  							
			  							fromGroup={this.props.fromGroup}
			  							allMessages={this.props.allMessages}
			  							personas={this.props.personas}/>
			  </div>
			  <div id="navInteractions" className="tab-pane fade">
			  		<InteractionsComponent useIPFS={this.props.useIPFS} 
			  							   activePersona={this.state.activePersona} 
			  							   api={this.props.api} />
			  </div>
			  <div id="navProfile" className="tab-pane fade">
			  		<ProfileComponent friendPersona={this.props.memberPersona}
			  						  viewMemberPersona={this.props.viewMemberPersona}
			  						  activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} /> 
			  </div>
			  <div id="navCommunities" className="tab-pane fade">
			  		<CommunitiesComponent 	activePersona={this.state.activePersona} 
											myCommunities={this.props.myCommunities} 
											activeCommunity={this.props.activeCommunity} 
											allCommunities={this.props.allCommunities}
											addAllCommunitiesState={this.addAllCommunitiesState}
											setActiveCommunity={this.setActiveCommunity}
											activeCommunityPosts={this.props.activeCommunityPosts}
											postToCommunity={this.postToCommunity}
											updateCommunity={this.updateCommunity}
	                       		 			addMyCommunitiesState={this.addMyCommunitiesState} />
			  </div>
			  <div id="navSettings" className="tab-pane fade">
					<SettingsComponent activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} />
			  </div>
			  <div id="navStats" className="tab-pane fade">
					<StatsComponent activePersona={this.state.activePersona} />
			  </div>

			</div>

		)
	}
});

module.exports = MainBodyContainer;
