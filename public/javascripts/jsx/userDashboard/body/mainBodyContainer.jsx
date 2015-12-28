

var MessagesComponent = require('./messageContainer');
var InteractionsComponent = require('./interactionsContainer');
var SettingsComponent = require('./settingsContainer');
var ProfileComponent = require('./profileContainer');
var CommunitiesComponent = require('./communities/communitiesContainer');
var HomeComponent = require('./homeContainer');

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
	render: function(){
		return(
			<div className="tab-content">
			  <div id="navHome" className="tab-pane fade in active">
			  		<HomeComponent useIPFS={this.props.useIPFS} activePersona={this.state.activePersona} />
			  </div>
			  <div id="navMessages" className="tab-pane fade">
			  		<MessagesComponent activePersona={this.state.activePersona} />
			  </div>
			  <div id="navInteractions" className="tab-pane fade">
			  		<InteractionsComponent useIPFS={this.props.useIPFS} activePersona={this.state.activePersona} api={this.props.api} />
			  </div>
			  <div id="navProfile" className="tab-pane fade">
			  		<ProfileComponent activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} /> 
			  </div>
			  <div id="navCommunities" className="tab-pane fade">
			  		<CommunitiesComponent 	activePersona={this.state.activePersona} 
											myCommunities={this.props.myCommunities} 
											allCommunities={this.props.allCommunities}
											addAllCommunitiesState={this.addAllCommunitiesState}
	                       		 			addMyCommunitiesState={this.addMyCommunitiesState} />
			  </div>
			  <div id="navSettings" className="tab-pane fade">
					<SettingsComponent activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} />
			  </div>

			</div>

		)
	}
});

module.exports = MainBodyContainer;
